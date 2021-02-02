import { CALC_DOORS, CALC_FENSES, CALC_FLOOR, CALC_FOUNDATION, CALC_GATES } from '../constants/calc-constants-general';
import { getBuildingRoofArea, getSkeletonWeight, getTotalWallAreaNetto } from './calc-functions-level-0';
import { getFloorArea, getWindowArea } from './calc-functions-level-1';
import store from '../../../../../store/store';

export const descFoundation = (): string => {
  const { foundation } = store.getState().building;
  return CALC_FOUNDATION.find((it) => it.id === foundation).name;
};

export const descSkeleton = (): string => {
  const skeletonWeight = getSkeletonWeight() / 1000;
  return `Стальной, окрашенный - ${skeletonWeight.toFixed(1)} т.`;
};

export const descFenses = (): string => {
  const roofArea = getBuildingRoofArea();
  const wallArea = getTotalWallAreaNetto();
  const fenses = store.getState().building.fences;
  const fensesArea = Math.ceil(roofArea + wallArea);
  const fensesName = CALC_FENSES.find((it) => it.id === fenses).name;
  return `${fensesName}, ${fensesArea.toLocaleString(undefined)} кв.м`;
};

export const descGates = (): string => {
  const { gatesType } = store.getState().building;
  const { gatesWidth } = store.getState().building;
  const { gatesHeight } = store.getState().building;
  const { gatesCount } = store.getState().building;
  const gatesName = CALC_GATES.types.find((it) => it.id === gatesType).name;
  const gatesSizesText = `, ${gatesWidth}x${gatesHeight}м`;
  const gatesCountText = gatesType === CALC_GATES.types[0].id ? '' : `${gatesSizesText}, ${gatesCount}шт.`;
  return gatesName + gatesCountText;
};
export const descDoors = (): string => {
  const { doorsType } = store.getState().building;
  const { doorsCount } = store.getState().building;
  const doorsName = CALC_DOORS.types.find((it) => it.id === doorsType).name;
  const doorsCountText = doorsType === CALC_DOORS.types[0].id ? '' : `, ${doorsCount}шт.`;
  return doorsName + doorsCountText;
};
export const descWindows = (): string => {
  const windowsArea = getWindowArea();
  return windowsArea === 0 ? 'Нет' : `ПВХ-профиль, ${Math.ceil(windowsArea)}кв.м`;
};

export const descFloor = (): string => {
  const { floor } = store.getState().building;
  const floorName = CALC_FLOOR.type.find((it) => it.id === floor).name;
  const floorArea = getFloorArea();
  const floorAreaText = floor === CALC_FLOOR.type[0].id ? '' : `, ${floorArea.toLocaleString(undefined)}кв.м`;
  return floorName + floorAreaText;
};
