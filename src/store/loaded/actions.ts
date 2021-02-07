import { LOADED_TOGGLE_SLIDE, LoadActionsCreators, LOADED_TOGGLE_GALLERY } from './types';

export const toggleLoadSlide = (value: boolean): LoadActionsCreators => ({
  type: LOADED_TOGGLE_SLIDE,
  payload: value,
});
export const toggleLoadGallery = (value: boolean): LoadActionsCreators => ({
  type: LOADED_TOGGLE_GALLERY,
  payload: value,
});
