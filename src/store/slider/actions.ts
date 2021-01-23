import { CHANGE_SLIDE_NUMBER, SliderActionsCreators } from './types';

const changeSlideNumber = (sliderNumber: number): SliderActionsCreators => ({
  type: CHANGE_SLIDE_NUMBER,
  payload: sliderNumber,
});

export default changeSlideNumber;
