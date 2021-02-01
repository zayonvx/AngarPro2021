import { IInitialState } from './types';

const initialState: IInitialState = {
  loaded: {
    slide: false,
    gallery: false,
  },
  slider: {
    currentSlider: 0,
  },
  preview: {
    collapsed: true,
    previewsInRow: 0,
    previewsRows: 0,
  },
  popup: {
    visible: false,
    children: null,
    closeable: false,
  },
  gallery: {
    currentPhoto: '001',
    mapVisible: false,
    coordinates: [],
  },
  quiz: {
    visible: false,
    currentPage: 0,
    buttonBackVisible: false,
    buttonForwardVisible: true,
    buttonSendVisible: false,
    children: null,
    name: '',
    mail: '',
    tel: '',
  },
  calculator: {
    visible: false,
    currentPage: 0,
    buttonBackVisible: false,
    buttonForwardVisible: true,
    children: null,
  },
  building: {
    width: 0,
    length: 0,
    height: 0,
    region: 0,
    regionStr: '',
    archType: 0,
    foundation: 0,
    floor: 0,
    fences: 0,
    sandwichType: 0,
    tentType: 0,
    gatesCount: 0,
    gatesType: 0,
    gatesWidth: 0,
    gatesHeight: 0,
    doorCount: 0,
    doorType: 0,
    windowsType: 0,
  },
};

export default initialState;
