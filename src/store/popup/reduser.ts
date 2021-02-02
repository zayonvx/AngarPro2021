import initialState from './initial-state';
import {
  IPopupState,
  POPUP_CHILDREN_CHANGE,
  POPUP_TOGGLE_CLOSEABLE,
  POPUP_TOGGLE_VISIBLE,
  PopupActionsCreators,
} from './types';

const popupRedusers = (state = initialState.popup, action: PopupActionsCreators): IPopupState['popup'] => {
  switch (action.type) {
    case POPUP_TOGGLE_VISIBLE:
      return { ...state, visible: action.payload };
    case POPUP_CHILDREN_CHANGE:
      return { ...state, children: action.payload };
    case POPUP_TOGGLE_CLOSEABLE:
      return { ...state, closeable: action.payload };
    default:
      return state;
  }
};

export default popupRedusers;
