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
    closeable: boolean;
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
