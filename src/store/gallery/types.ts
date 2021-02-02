export const GALLERY_CHANGE_CURRENT_PHOTO = 'GALLERY_CHANGE_CURRENT_PHOTO';
export const GALLERY_TOGGLE_MAP_SHOW = 'GALLERY_TOGGLE_MAP_SHOW';
export const GALLERY_CHANGE_COORDINATES = 'GALLERY_CHANGE_COORDINATES';

export interface IGalleryState {
  gallery: {
    currentPhoto: string;
    mapVisible: boolean;
    coordinates: number[];
  };
}

interface ChangeCurrentPhoto {
  type: typeof GALLERY_CHANGE_CURRENT_PHOTO;
  payload: string;
}

interface ToggleGalleryMapVisible {
  type: typeof GALLERY_TOGGLE_MAP_SHOW;
  payload: boolean;
}

interface ChangeGalleryCoordinates {
  type: typeof GALLERY_CHANGE_COORDINATES;
  payload: number[];
}

export type GalleryActionsCreators = ChangeCurrentPhoto | ToggleGalleryMapVisible | ChangeGalleryCoordinates;
