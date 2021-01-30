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
};
