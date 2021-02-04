import {
  POPUP_CHILDREN_CHANGE,
  POPUP_TOGGLE_BACK_VISIBLE,
  POPUP_TOGGLE_CLOSEABLE,
  POPUP_TOGGLE_FORWARD_VISIBLE,
  POPUP_TOGGLE_SEND_VISIBLE,
  POPUP_TOGGLE_VISIBLE,
  PopupActionsCreators,
} from './types';

export const togglePopupVisible = (value: boolean): PopupActionsCreators => ({
  type: POPUP_TOGGLE_VISIBLE,
  payload: value,
});

export const changePopupChildren = (value: JSX.Element): PopupActionsCreators => ({
  type: POPUP_CHILDREN_CHANGE,
  payload: value,
});

export const togglePopupCloseable = (value: boolean): PopupActionsCreators => ({
  type: POPUP_TOGGLE_CLOSEABLE,
  payload: value,
});
export const togglePopupBackward = (value: boolean): PopupActionsCreators => ({
  type: POPUP_TOGGLE_BACK_VISIBLE,
  payload: value,
});
export const togglePopupForward = (value: boolean): PopupActionsCreators => ({
  type: POPUP_TOGGLE_FORWARD_VISIBLE,
  payload: value,
});
export const togglePopupSend = (value: boolean): PopupActionsCreators => ({
  type: POPUP_TOGGLE_SEND_VISIBLE,
  payload: value,
});
