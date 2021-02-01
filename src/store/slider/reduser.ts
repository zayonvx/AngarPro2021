import initialState from '../initial-state';
import { CHANGE_SLIDE_NUMBER, SliderActionsCreators, SliderState } from './types';

const sliderRedusers = (state = initialState.slider, action: SliderActionsCreators): SliderState => {
  if (action.type === CHANGE_SLIDE_NUMBER) {
    return { ...state, currentSlider: action.payload };
  }
  return state;
};

export default sliderRedusers;
