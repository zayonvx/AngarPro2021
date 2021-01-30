import { initialState } from '../initial-state';
import { POPUP_CHILDREN_CHANGE, POPUP_TOGGLE_VISIBLE, PopupActionsCreators, PopupState } from './types';

const popupRedusers = (state = initialState.popup, action: PopupActionsCreators): PopupState => {
  switch (action.type) {
    case POPUP_TOGGLE_VISIBLE:
      return { ...state, visible: action.payload };
    case POPUP_CHILDREN_CHANGE:
      return { ...state, children: action.payload };
    default:
      return state;
  }
};

export default popupRedusers;
