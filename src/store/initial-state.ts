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
  };
  calculator: {
    visible: boolean;
    currentPage: number;
    buttonBackVisible: boolean;
    buttonForwardVisible: boolean;
  };
  building: {
    width: number;
    length: number;
    height: number;
    region: number;
    archType: number;
    foundation: number;
    floor: number;
    fences: number;
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
    buttonForwardVisible: false,
    buttonSendVisible: false,
  },
  calculator: {
    visible: false,
    currentPage: 0,
    buttonBackVisible: false,
    buttonForwardVisible: false,
  },
  building: {
    width: 0,
    length: 0,
    height: 0,
    region: 0,
    archType: 0,
    foundation: 0,
    floor: 0,
    fences: 0,
    gatesCount: 0,
    gatesType: 0,
    gatesWidth: 0,
    gatesHeight: 0,
    doorCount: 0,
    doorType: 0,
    windowsType: 0,
  },
};
