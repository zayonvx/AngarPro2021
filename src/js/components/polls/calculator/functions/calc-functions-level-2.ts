import {
  CALC_ARCHITECTURAL_TYPES,
  CALC_FENSES,
  CALC_REGIONS,
  CALC_SNOW_WEIGHT,
  CALC_SPAN_STEP,
} from '../constants/calc-constants-general';
import { convertDegToRad } from '../../../../utils/functions';
import store from '../../../../../store/store';

export const getBuildingArea = (
  width = store.getState().building.width,
  length = store.getState().building.length,
): number => width * length;

export const getBuildingPerimeter = (
  width = store.getState().building.width,
  length = store.getState().building.length,
): number => (width + length) * 2;

export const getSlopeLenght = (
  width = store.getState().building.width,
  angle = store.getState().building.angle,
  arch = store.getState().building.archType,
): number => {
  const index = CALC_ARCHITECTURAL_TYPES.findIndex((it) => it.id === arch);
  let lengthSlope: number;
  switch (index) {
    case 0:
      lengthSlope = width / Math.cos(convertDegToRad(angle));
      break;
    case 1:
      lengthSlope = width / 2 / Math.cos(convertDegToRad(angle));
      break;
    case 2:
      lengthSlope = width / 4 / Math.cos(convertDegToRad(angle));
      break;
    default:
      lengthSlope = 0;
      break;
  }
  return Number(lengthSlope.toFixed(3));
};

export const getGableHeight = (
  width = store.getState().building.width,
  angle = store.getState().building.angle,
  arch = store.getState().building.archType,
): number => {
  const index = CALC_ARCHITECTURAL_TYPES.findIndex((it) => it.id === arch);
  let heightGable: number;
  switch (index) {
    case 0:
      heightGable = width * Math.tan(convertDegToRad(angle));
      break;
    case 1:
      heightGable = (width / 2) * Math.tan(convertDegToRad(angle));
      break;
    case 2:
      heightGable = (width / 4) * Math.tan(convertDegToRad(angle));
      break;
    default:
      heightGable = 0;
      break;
  }
  return Number(heightGable.toFixed(3));
};

export const getAtticArea = (
  width = store.getState().building.width,
  angle = store.getState().building.angle,
  arch = store.getState().building.archType,
): number => {
  const atticHeight = getGableHeight(width, angle, arch);
  const index = CALC_ARCHITECTURAL_TYPES.findIndex((it) => it.id === arch);
  let areaAttic: number;
  switch (index) {
    case 0:
      areaAttic = (width * atticHeight) / 2;
      break;
    case 1:
      areaAttic = (width / 2) * atticHeight;
      break;
    case 2:
      areaAttic = (width / 4) * atticHeight * 2;
      break;
    default:
      areaAttic = 0;
      break;
  }
  return Number(areaAttic.toFixed(3));
};
export const getSpanStep = (
  length = store.getState().building.length,
  fences = store.getState().building.fences,
): number => {
  const maxStep = fences === CALC_FENSES[0].id ? CALC_SPAN_STEP.tent : CALC_SPAN_STEP.also;
  const ceil = Math.ceil(length / maxStep);
  const step = length / ceil;
  return Number(step.toFixed(3));
};

export const getSnowZone = (region: number = store.getState().building.region): number => {
  const { snow } = CALC_REGIONS.find((it) => it.id === region);
  return snow;
};

export const getSnowWeight = (
  width = store.getState().building.width,
  length = store.getState().building.length,
  region = store.getState().building.region,
): number => {
  const snow = CALC_SNOW_WEIGHT[getSnowZone(region)];
  const area = getBuildingArea(width, length);
  return Math.round(snow * area);
};
