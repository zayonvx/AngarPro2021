import initialState from './initial-state';
import { ILoadedState, LoadActionsCreators, LOADED_TOGGLE_GALLERY, LOADED_TOGGLE_SLIDE } from './types';

const loadedRedusers = (state = initialState.loaded, action: LoadActionsCreators): ILoadedState['loaded'] => {
  switch (action.type) {
    case LOADED_TOGGLE_SLIDE:
      return { ...state, slide: action.payload };
    case LOADED_TOGGLE_GALLERY:
      return { ...state, gallery: action.payload };
    default:
      return state;
  }
};

export default loadedRedusers;
