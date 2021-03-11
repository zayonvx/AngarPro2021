import {
  GALLERY_CHANGE_COORDINATES,
  GALLERY_CHANGE_CURRENT_PHOTO,
  GALLERY_CHANGE_PROJECT,
  GALLERY_TOGGLE_IMAGE_LOADED,
  GALLERY_TOGGLE_MAP_SHOW,
  GalleryActionsCreators,
} from './types';
import { IProject } from '../../js/database/gallery-base';

export const changeProject = (value: IProject): GalleryActionsCreators => ({
  type: GALLERY_CHANGE_PROJECT,
  payload: value,
});

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
