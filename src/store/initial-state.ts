export interface IInitialState {
  loaded: {
    slide: boolean;
    gallery: boolean;
  };
  slider: {
    currentSlider: number;
  };
  preview: {
    collapsed: boolean;
    previewsInRow: number;
    previewsRows: number;
  };
  popup: {
    visible: boolean;
    children: JSX.Element;
  };
  gallery: {
    currentPhoto: string;
    mapVisible: boolean;
    coordinates: number[];
  };
  quiz: {
    visible: boolean;
    currentPage: number;
    buttonBackVisible: boolean;
    buttonForwardVisible: boolean;
    buttonSendVisible: boolean;
    children: JSX.Element;
    name: string;
    mail: string;
    tel: string;
  };
  calculator: {
    visible: boolean;
    currentPage: number;
    buttonBackVisible: boolean;
    buttonForwardVisible: boolean;
    children: JSX.Element;
  };
  building: {
    width: number;
    length: number;
    height: number;
    region: number;
    regionStr: string;
    archType: number;
    foundation: number;
    floor: number;
    fences: number;
    sandwichType: number;
    tentType: number;
    gatesCount: number;
    gatesType: number;
    gatesWidth: number;
    gatesHeight: number;
    doorCount: number;
    doorType: number;
    windowsType: number;
  };
}

export const initialState = {
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
