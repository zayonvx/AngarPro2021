import { LOADED_TOGGLE_SLIDE, LoadActionsCreators } from './types';

export const toggleLoadSlide = (value: boolean): LoadActionsCreators => ({
  type: LOADED_TOGGLE_SLIDE,
  payload: value,
});

export const notError = '';
