import { IBuildingState } from './types';

const initialState: IBuildingState = {
  building: {
    width: 0,
    length: 0,
    height: 0,
    angle: 8,
    region: 0,
    regionStr: '',
    archType: 1,
    foundation: 0,
    floor: 0,
    fences: 0,
    sandwichType: 0,
    tentType: 0,
    gatesCount: 0,
    gatesType: 0,
    gatesWidth: 0,
    gatesHeight: 0,
    doorsCount: 0,
    doorsType: 0,
    windowsRows: 0,
  },
};

export default initialState;
