import { initialState } from '../initial-state';
import {
  BUILDING_ARCHTYPE_CHANGE, BUILDING_DOOR_COUNT_CHANGE, BUILDING_DOOR_TYPE_CHANGE,
  BUILDING_FENCES_CHANGE,
  BUILDING_FLOOR_CHANGE,
  BUILDING_FOUNDATION_CHANGE,
  BUILDING_GATE_COUNT_CHANGE, BUILDING_GATE_HEIGHT_CHANGE, BUILDING_GATE_TYPE_CHANGE, BUILDING_GATE_WIDTH_CHANGE,
  BUILDING_HEIGHT_CHANGE,
  BUILDING_LENGTH_CHANGE,
  BUILDING_REGION_CHANGE,
  BUILDING_WIDTH_CHANGE, BUILDING_WINDOWS_TYPE_CHANGE,
  BuildingActionsCreators,
  BuildingState,
} from './types';

const buildingRedusers = (state = initialState.building, action: BuildingActionsCreators): BuildingState => {
  switch (action.type) {
    case BUILDING_WIDTH_CHANGE:
      return { ...state, width: action.payload };
    case BUILDING_LENGTH_CHANGE:
      return { ...state, length: action.payload };
    case BUILDING_HEIGHT_CHANGE:
      return { ...state, height: action.payload };
    case BUILDING_REGION_CHANGE:
      return { ...state, region: action.payload };
    case BUILDING_ARCHTYPE_CHANGE:
      return { ...state, archType: action.payload };
    case BUILDING_FOUNDATION_CHANGE:
      return { ...state, foundation: action.payload };
    case BUILDING_FLOOR_CHANGE:
      return { ...state, floor: action.payload };
    case BUILDING_FENCES_CHANGE:
      return { ...state, fences: action.payload };
    case BUILDING_GATE_COUNT_CHANGE:
      return { ...state, gatesCount: action.payload };
    case BUILDING_GATE_TYPE_CHANGE:
      return { ...state, gatesType: action.payload };
    case BUILDING_GATE_WIDTH_CHANGE:
      return { ...state, gatesWidth: action.payload };
    case BUILDING_GATE_HEIGHT_CHANGE:
      return { ...state, gatesHeight: action.payload };
    case BUILDING_DOOR_COUNT_CHANGE:
      return { ...state, doorCount: action.payload };
    case BUILDING_DOOR_TYPE_CHANGE:
      return { ...state, doorType: action.payload };
    case BUILDING_WINDOWS_TYPE_CHANGE:
      return { ...state, windowsType: action.payload };
    default:
      return state;
  }
};

export default buildingRedusers;
