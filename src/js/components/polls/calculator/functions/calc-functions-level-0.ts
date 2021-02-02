import {
  CALC_ARCHITECTURAL_TYPES,
  CALC_COEFFS,
  CALC_CORNICE,
  CALC_FENSES,
  CALC_METAL_CONSUMPTION,
  CALC_PILES,
  CALC_PROFNASTIL,
  CALC_SANDWICH,
  CALC_TENT,
} from '../constants/calc-constants-general';
import { getBuildingArea, getSlopeLenght, getSnowWeight, getSnowZone, getSpanStep } from './calc-functions-level-2';
import { getBuildingWallsArea, getButtArea, getGateArea, getWindowArea } from './calc-functions-level-1';
import store from '../../../../../store/store';

// Main level

export const getSkeletonWeight = (
  width = store.getState().building.width,
  length = store.getState().building.length,
  height = store.getState().building.height,
  fences = store.getState().building.fences,
  region = store.getState().building.region
): number => {
  const area = getBuildingArea(width, length);
  const snow = getSnowZone(region);
  let coeffFences: number;
  switch (fences) {
    case CALC_FENSES[0].id:
      coeffFences = CALC_TENT.consumptionK;
      break;
    case CALC_FENSES[1].id:
      coeffFences = CALC_PROFNASTIL.consumptionK;
      break;
    case CALC_FENSES[2].id:
      coeffFences = CALC_SANDWICH.consumptionK;
      break;
    default:
      coeffFences = 0;
      break;
  }

  const heightDelta = height - CALC_COEFFS.height.base;
  const heightCoeff = 1 + heightDelta * CALC_COEFFS.height.coeff;
  const widthDelta = width - CALC_COEFFS.width.base;
  const widthBaseCoeff = widthDelta > 0 ? CALC_COEFFS.width.coeffUp : CALC_COEFFS.width.coeffDown;
  const widthCoeff = 1 + Math.abs(widthDelta) * widthBaseCoeff;
  const consumption = CALC_METAL_CONSUMPTION[snow] * heightCoeff * widthCoeff;

  const weightTotal = consumption * area * coeffFences;
  return Math.round(weightTotal);
};
export const getSteelPileCount = (
  width = store.getState().building.width,
  length = store.getState().building.length,
  height = store.getState().building.height,
  fences = store.getState().building.fences,
  region = store.getState().building.region
): number => {
  const stepPileLenght = getSpanStep(length, fences);
  const buildingWeight =
    getSkeletonWeight(width, length, height, fences, region) + getSnowWeight(width, length, region);
  const lenPiles = (length / stepPileLenght) * 2 + 2;
  const widPiles = Math.ceil(width / CALC_PILES.stepButt - 1) * 2;
  const perimeterPiles = lenPiles + widPiles;
  const weightPiles = Math.ceil(buildingWeight / CALC_PILES.loadCapacity);
  return perimeterPiles > weightPiles ? perimeterPiles : weightPiles;
};
export const getBuildingRoofArea = (
  width = store.getState().building.width,
  length = store.getState().building.length,
  angle = store.getState().building.angle,
  fences = store.getState().building.fences,
  archType = store.getState().building.archType
): number => {
  const cornice = CALC_CORNICE;
  let corniceLenght: number;
  switch (fences) {
    case CALC_FENSES[0].id:
      corniceLenght = cornice.tent;
      break;
    case CALC_FENSES[1].id:
      corniceLenght = cornice.profnastil;
      break;
    case CALC_FENSES[2].id:
      corniceLenght = cornice.sandwich;
      break;
    default:
      corniceLenght = 0;
      break;
  }

  const index = CALC_ARCHITECTURAL_TYPES.findIndex((it) => it.id === archType);

  let roofArea: number;
  switch (index) {
    case 0:
      roofArea = (getSlopeLenght(width, angle, archType) + corniceLenght) * length;
      break;
    case 1:
      roofArea = (getSlopeLenght(width, angle, archType) + corniceLenght) * length * 2;
      break;
    case 2:
      roofArea = getSlopeLenght(width, angle, archType) * length * 4 + corniceLenght * length * 2;
      break;
    default:
      roofArea = 0;
      break;
  }

  return Number(roofArea.toFixed(3));
};

export const getTotalWallAreaBrutto = (
  width = store.getState().building.width,
  length = store.getState().building.length,
  height = store.getState().building.height,
  angle = store.getState().building.angle,
  archType = store.getState().building.archType
): number => {
  const walls = getBuildingWallsArea(width, length, height, angle, archType);
  const butts = getButtArea(width, height, angle, archType) * 2;
  const area = walls + butts;
  return Math.round(area);
};

export const getTotalWallAreaNetto = (
  width = store.getState().building.width,
  length = store.getState().building.length,
  height = store.getState().building.height,
  angle = store.getState().building.angle,
  archType = store.getState().building.archType,
  gatesWidth = store.getState().building.gatesWidth,
  gatesHeight = store.getState().building.gatesHeight,
  gatesCount = store.getState().building.gatesCount,
  windowRows = store.getState().building.windowsRows
): number => {
  const walls = getTotalWallAreaBrutto(width, length, height, angle, archType);
  const gatesArea = getGateArea(gatesWidth, gatesHeight, gatesCount);
  const windowsArea = getWindowArea(width, height, windowRows);
  return Math.ceil(walls - gatesArea - windowsArea);
};
