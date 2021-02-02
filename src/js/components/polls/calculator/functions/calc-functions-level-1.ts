import { CALC_ARCHITECTURAL_TYPES, CALC_FOUNDATION, CALC_WINDOW_PARAMS } from '../constants/calc-constants-general';
import { getAtticArea, getBuildingArea, getBuildingPerimeter, getGableHeight } from './calc-functions-level-2';
import store from '../../../../../store/store';

export const getBuildingWallsArea = (
  width: number = store.getState().building.width,
  length: number = store.getState().building.length,
  height: number = store.getState().building.height,
  angle: number = store.getState().building.angle,
  archType: number = store.getState().building.archType,
): number => (archType === CALC_ARCHITECTURAL_TYPES[0].id
  ? height * length + (height + getGableHeight(width, angle, archType)) * length
  : height * length * 2);
export const getButtArea = (
  width: number = store.getState().building.width,
  height: number = store.getState().building.height,
  angle: number = store.getState().building.angle,
  archType: number = store.getState().building.archType,
): number => {
  const areaButt = height * width + getAtticArea(width, angle, archType);
  return Number(areaButt.toFixed(3));
};

export const getGateArea = (
  width: number = store.getState().building.gatesWidth,
  height: number = store.getState().building.gatesHeight,
  count: number = store.getState().building.gatesCount,
): number => width * height * count;

export const getWindowArea = (
  width = store.getState().building.width,
  length = store.getState().building.length,
  windowRows = store.getState().building.windowsRows,
): number => {
  const { height } = CALC_WINDOW_PARAMS;

  const longRowsLenght = (length - CALC_WINDOW_PARAMS.horizontal_gap * 2) * windowRows * 2;
  const shortRowsLenght = (width - CALC_WINDOW_PARAMS.horizontal_gap * 2) * windowRows * 2;
  const longRowsArea = longRowsLenght * height;
  const shortRowsArea = shortRowsLenght * height;
  const area = longRowsArea + shortRowsArea;
  return Number(area.toFixed(3));
};
export const getFloorArea = (
  width = store.getState().building.width,
  length = store.getState().building.length,
): number => width * length;

export const getFoundationConcreteVolume = (
  width = store.getState().building.width,
  length = store.getState().building.length,
  type = store.getState().building.foundation,
): number => {
  let volume: number;
  switch (type) {
    case CALC_FOUNDATION[2].id: {
      volume = getBuildingPerimeter(width, length) * CALC_FOUNDATION[2].sectionArea;
      break;
    }
    case CALC_FOUNDATION[3].id: {
      volume = getBuildingPerimeter(width, length) * CALC_FOUNDATION[3].sectionArea;
      break;
    }
    case CALC_FOUNDATION[4].id: {
      const plateExpansion = 1; // total for both sides
      volume = getBuildingArea(width + plateExpansion, length + plateExpansion) * CALC_FOUNDATION[4].thickness;
      break;
    }
    default:
      volume = 0;
      break;
  }
  return Number(volume.toFixed(3));
};
