import {
  GALLERY_CHANGE_PROJECT,
  GALLERY_TOGGLE_MAP_SHOW,
  GALLERY_TOGGLE_VISIBLE,
  GalleryActionsCreators,
} from './types';
import { IProject } from '../../js/database/gallery-base';

export const changeProject = (value: IProject): GalleryActionsCreators => ({
  type: GALLERY_CHANGE_PROJECT,
  payload: value,
});

export const toggleGalleryMapVisible = (value: boolean): GalleryActionsCreators => ({
  type: GALLERY_TOGGLE_MAP_SHOW,
  payload: value,
});

export const galleryVisibleToggle = (value: boolean): GalleryActionsCreators => ({
  type: GALLERY_TOGGLE_VISIBLE,
  payload: value,
});
