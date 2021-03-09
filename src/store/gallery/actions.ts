import {
  GALLERY_CHANGE_COORDINATES,
  GALLERY_CHANGE_CURRENT_PHOTO,
  GALLERY_TOGGLE_IMAGE_LOADED,
  GALLERY_TOGGLE_MAP_SHOW,
  GalleryActionsCreators,
} from './types';

export const changeCurrentPhoto = (value: number): GalleryActionsCreators => ({
  type: GALLERY_CHANGE_CURRENT_PHOTO,
  payload: value,
});

export const toggleGalleryMapVisible = (value: boolean): GalleryActionsCreators => ({
  type: GALLERY_TOGGLE_MAP_SHOW,
  payload: value,
});

export const changeGalleryCoordinates = (value: number[]): GalleryActionsCreators => ({
  type: GALLERY_CHANGE_COORDINATES,
  payload: value,
});
export const toggleGalleryImageLoaded = (value: boolean): GalleryActionsCreators => ({
  type: GALLERY_TOGGLE_IMAGE_LOADED,
  payload: value,
});
