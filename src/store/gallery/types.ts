import { IProject } from '../../js/database/gallery-base';

export const GALLERY_TOGGLE_MAP_SHOW = 'GALLERY_TOGGLE_MAP_SHOW';
export const GALLERY_CHANGE_PROJECT = 'GALLERY_CHANGE_PROJECT';
export const GALLERY_TOGGLE_VISIBLE = 'GALLERY_TOGGLE_VISIBLE';

export interface IGalleryState {
  gallery: {
    project: IProject;
    mapVisible: boolean;
    visible: boolean;
  };
}

interface GalleryVisible {
  type: typeof GALLERY_TOGGLE_VISIBLE;
  payload: boolean;
}

interface ChangeProject {
  type: typeof GALLERY_CHANGE_PROJECT;
  payload: IProject;
}

interface ToggleGalleryMapVisible {
  type: typeof GALLERY_TOGGLE_MAP_SHOW;
  payload: boolean;
}

export type GalleryActionsCreators = ToggleGalleryMapVisible | ChangeProject | GalleryVisible;
