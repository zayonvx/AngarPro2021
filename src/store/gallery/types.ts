import { IProject } from '../../js/database/gallery-base';

export const GALLERY_CHANGE_CURRENT_PHOTO = 'GALLERY_CHANGE_CURRENT_PHOTO';
export const GALLERY_TOGGLE_MAP_SHOW = 'GALLERY_TOGGLE_MAP_SHOW';
export const GALLERY_CHANGE_COORDINATES = 'GALLERY_CHANGE_COORDINATES';
export const GALLERY_TOGGLE_IMAGE_LOADED = 'GALLERY_TOGGLE_IMAGE_LOADED';
export const GALLERY_CHANGE_PROJECT = 'GALLERY_CHANGE_PROJECT';

export interface IGalleryState {
  gallery: {
    project: IProject;
    photoIndex: number;
    mapVisible: boolean;
    loaded: boolean;
  };
}

interface ChangeProject {
  type: typeof GALLERY_CHANGE_PROJECT;
  payload: IProject;
}

interface ChangeCurrentPhoto {
  type: typeof GALLERY_CHANGE_CURRENT_PHOTO;
  payload: number;
}

interface ToggleGalleryMapVisible {
  type: typeof GALLERY_TOGGLE_MAP_SHOW;
  payload: boolean;
}

interface ChangeGalleryCoordinates {
  type: typeof GALLERY_CHANGE_COORDINATES;
  payload: number[];
}

interface ToggleGalleryImageLoaded {
  type: typeof GALLERY_TOGGLE_IMAGE_LOADED;
  payload: boolean;
}

export type GalleryActionsCreators =
  | ChangeCurrentPhoto
  | ToggleGalleryMapVisible
  | ChangeGalleryCoordinates
  | ToggleGalleryImageLoaded
  | ChangeProject;
