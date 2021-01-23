export interface IInitialState {
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
  slider: {
    currentSlider: 0,
  },
  preview: {
    collapsed: true,
    previewsInRow: 0,
    previewsRows: 0,
  },
};
