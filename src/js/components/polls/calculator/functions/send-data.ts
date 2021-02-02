import {
  CALC_ARCHITECTURAL_TYPES,
  CALC_DOORS,
  CALC_FENSES,
  CALC_FLOOR,
  CALC_FOUNDATION,
  CALC_GATES,
  CALC_REGIONS,
  CALC_WINDOWS,
} from '../constants/calc-constants-general';
import store from '../../../../../store/store';
import { calculatorUrlPHP } from '../../../../utils/const';

const getRegionName = (): string => {
  const { region } = store.getState().building;
  return CALC_REGIONS[region].name;
};
const getSizes = (): string => {
  const { width } = store.getState().building;
  const { length } = store.getState().building;
  const { height } = store.getState().building;
  return `${width} x ${length} x ${height}`;
};
const getArchTypeName = (): string => {
  const { archType } = store.getState().building;
  return CALC_ARCHITECTURAL_TYPES.find((it) => it.id === archType).name;
};
const getFoundationName = (): string => {
  const storeID = store.getState().building.foundation;
  return CALC_FOUNDATION.find((it) => it.id === storeID).name;
};
const getFenseName = (): string => {
  const storeID = store.getState().building.fences;
  return CALC_FENSES.find((it) => it.id === storeID).name;
};
const getFloorName = (): string => {
  const storeID = store.getState().building.floor;
  return CALC_FLOOR.type.find((it) => it.id === storeID).name;
};
const getGatesData = (): string => {
  const { gatesCount } = store.getState().building;
  const { gatesWidth } = store.getState().building;
  const { gatesHeight } = store.getState().building;
  const { gatesType } = store.getState().building;
  const gatesTypeName = CALC_GATES.types.find((it) => it.id === gatesType).name;
  return gatesCount > 0 ? `${gatesTypeName}, ${gatesWidth} x ${gatesHeight} - ${gatesCount}шт.` : '-';
};
const getDoorsData = (): string => {
  const { doorsCount } = store.getState().building;
  const { doorsType } = store.getState().building;
  const doorsTypeName = CALC_DOORS.types.find((it) => it.id === doorsType).name;
  return doorsCount > 0 ? `${doorsTypeName}, ${doorsCount}шт.` : '-';
};
const getWindowsData = (): string => {
  const { windowsRows } = store.getState().building;
  return CALC_WINDOWS.find((it) => it.id === windowsRows).name;
};
const getTime = (): string => {
  const date = new Date();
  return date.toLocaleString('ru');
};
const datas = (): { time: string; description: string; concrete: string; options: string } => {
  const time = getTime();
  const regionName = getRegionName();
  const sizes = getSizes();
  const archName = getArchTypeName();
  const foundationName = getFoundationName();
  const floorName = getFloorName();
  const fenseName = getFenseName();
  const gatesData = getGatesData();
  const doorsData = getDoorsData();
  const windowsData = getWindowsData();

  const description = `${regionName}, ${archName.toLowerCase()}, ${sizes}, ${fenseName.toLowerCase()}`;
  const concrete = `Фундамент: ${foundationName.toLowerCase()}. Пол: ${floorName.toLowerCase()}`;
  const options = `Ворота: ${gatesData.toLowerCase()} Двери: ${doorsData.toLowerCase()} Окна: ${windowsData.toLowerCase()}`;

  return { time, description, concrete, options };
};

const calculatorSendDatas = (): void => {
  const data = datas();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', calculatorUrlPHP, true);
  const post = JSON.stringify(data);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(post);
};

export default calculatorSendDatas;
