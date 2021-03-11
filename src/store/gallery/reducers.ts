import initialState from './initial-state';
import {
  GALLERY_CHANGE_CURRENT_PHOTO,
  GALLERY_CHANGE_PROJECT,
  GALLERY_TOGGLE_IMAGE_LOADED,
  GALLERY_TOGGLE_MAP_SHOW,
  GalleryActionsCreators,
  IGalleryState,
} from './types';

const galleryRedusers = (state = initialState.gallery, action: GalleryActionsCreators): IGalleryState['gallery'] => {
  switch (action.type) {
    case GALLERY_CHANGE_PROJECT:
      return { ...state, project: action.payload };
    case GALLERY_CHANGE_CURRENT_PHOTO:
      return { ...state, photoIndex: action.payload };
    case GALLERY_TOGGLE_MAP_SHOW:
      return { ...state, mapVisible: action.payload };
    case GALLERY_TOGGLE_IMAGE_LOADED:
      return { ...state, loaded: action.payload };
    default:
      return state;
  }
};

export default galleryRedusers;
