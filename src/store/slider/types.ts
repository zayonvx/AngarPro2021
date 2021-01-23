export const CHANGE_SLIDE_NUMBER = 'CHANGE_SLIDE_NUMBER';

export interface SliderState {
  currentSlider: number;
}

interface ChangeSlideNumber {
  type: typeof CHANGE_SLIDE_NUMBER;
  payload: number;
}

export type SliderActionsCreators = ChangeSlideNumber;
