import initialState from './initial-state';
import {
  GALLERY_CHANGE_COORDINATES,
  GALLERY_CHANGE_CURRENT_PHOTO,
  GALLERY_TOGGLE_MAP_SHOW,
  GalleryActionsCreators,
  IGalleryState,
} from './types';

const galleryRedusers = (state = initialState.gallery, action: GalleryActionsCreators): IGalleryState['gallery'] => {
  switch (action.type) {
    case GALLERY_CHANGE_CURRENT_PHOTO:
      return { ...state, currentPhoto: action.payload };
    case GALLERY_TOGGLE_MAP_SHOW:
      return { ...state, mapVisible: action.payload };
    case GALLERY_CHANGE_COORDINATES:
      return { ...state, coordinates: action.payload };
    default:
      return state;
  }
};

export default galleryRedusers;
