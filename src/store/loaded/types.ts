export const LOADED_TOGGLE_SLIDE = 'LOADED_TOGGLE_SLIDE';
export const LOADED_TOGGLE_GALLERY = 'LOADED_TOGGLE_GALLERY';

export interface LoadState {
  slide: boolean;
  gallery: boolean;
}

interface ToggleSlideLoaded {
  type: typeof LOADED_TOGGLE_SLIDE;
  payload: boolean;
}

interface ToggleGalleryLoaded {
  type: typeof LOADED_TOGGLE_GALLERY;
  payload: boolean;
}

export type LoadActionsCreators = ToggleSlideLoaded | ToggleGalleryLoaded;
