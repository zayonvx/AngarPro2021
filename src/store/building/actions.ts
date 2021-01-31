import {
  BUILDING_ARCHTYPE_CHANGE,
  BUILDING_DOOR_COUNT_CHANGE,
  BUILDING_DOOR_TYPE_CHANGE,
  BUILDING_FENCES_CHANGE,
  BUILDING_FLOOR_CHANGE,
  BUILDING_FOUNDATION_CHANGE,
  BUILDING_GATE_COUNT_CHANGE,
  BUILDING_GATE_HEIGHT_CHANGE,
  BUILDING_GATE_TYPE_CHANGE,
  BUILDING_GATE_WIDTH_CHANGE,
  BUILDING_HEIGHT_CHANGE,
  BUILDING_LENGTH_CHANGE,
  BUILDING_REGION_CHANGE,
  BUILDING_REGION_STR_CHANGE,
  BUILDING_SANDWICH_TYPE_CHANGE,
  BUILDING_TENT_TYPE_CHANGE,
  BUILDING_WIDTH_CHANGE,
  BUILDING_WINDOWS_TYPE_CHANGE,
  BuildingActionsCreators,
} from './types';

export const buildingChangeWidth = (value: number): BuildingActionsCreators => ({
  type: BUILDING_WIDTH_CHANGE,
  payload: value,
});
export const buildingChangeLength = (value: number): BuildingActionsCreators => ({
  type: BUILDING_LENGTH_CHANGE,
  payload: value,
});
export const buildingChangeHeight = (value: number): BuildingActionsCreators => ({
  type: BUILDING_HEIGHT_CHANGE,
  payload: value,
});
export const buildingChangeRegion = (value: number): BuildingActionsCreators => ({
  type: BUILDING_REGION_CHANGE,
  payload: value,
});
export const buildingChangeRegionStr = (value: string): BuildingActionsCreators => ({
  type: BUILDING_REGION_STR_CHANGE,
  payload: value,
});
export const buildingChangeArchType = (value: number): BuildingActionsCreators => ({
  type: BUILDING_ARCHTYPE_CHANGE,
  payload: value,
});
export const buildingChangeFoundation = (value: number): BuildingActionsCreators => ({
  type: BUILDING_FOUNDATION_CHANGE,
  payload: value,
});
export const buildingChangeFloor = (value: number): BuildingActionsCreators => ({
  type: BUILDING_FLOOR_CHANGE,
  payload: value,
});
export const buildingChangeFences = (value: number): BuildingActionsCreators => ({
  type: BUILDING_FENCES_CHANGE,
  payload: value,
});
export const buildingChangeSandwichType = (value: number): BuildingActionsCreators => ({
  type: BUILDING_SANDWICH_TYPE_CHANGE,
  payload: value,
});
export const buildingChangeTentType = (value: number): BuildingActionsCreators => ({
  type: BUILDING_TENT_TYPE_CHANGE,
  payload: value,
});
export const buildingChangeGatesCount = (value: number): BuildingActionsCreators => ({
  type: BUILDING_GATE_COUNT_CHANGE,
  payload: value,
});
export const buildingChangeGatesType = (value: number): BuildingActionsCreators => ({
  type: BUILDING_GATE_TYPE_CHANGE,
  payload: value,
});
export const buildingChangeGatesWidth = (value: number): BuildingActionsCreators => ({
  type: BUILDING_GATE_WIDTH_CHANGE,
  payload: value,
});
export const buildingChangeGatesHeight = (value: number): BuildingActionsCreators => ({
  type: BUILDING_GATE_HEIGHT_CHANGE,
  payload: value,
});
export const buildingChangeDoorsCount = (value: number): BuildingActionsCreators => ({
  type: BUILDING_DOOR_COUNT_CHANGE,
  payload: value,
});
export const buildingChangeDoorsType = (value: number): BuildingActionsCreators => ({
  type: BUILDING_DOOR_TYPE_CHANGE,
  payload: value,
});
export const buildingChangeWindowsType = (value: number): BuildingActionsCreators => ({
  type: BUILDING_WINDOWS_TYPE_CHANGE,
  payload: value,
});
