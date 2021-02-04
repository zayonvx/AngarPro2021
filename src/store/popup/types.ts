export const POPUP_TOGGLE_VISIBLE = 'POPUP_TOGGLE_VISIBLE';
export const POPUP_CHILDREN_CHANGE = 'POPUP_CHILDREN_CHANGE';
export const POPUP_TOGGLE_CLOSEABLE = 'POPUP_TOGGLE_CLOSEABLE';
export const POPUP_TOGGLE_BACK_VISIBLE = 'POPUP_TOGGLE_BACK_VISIBLE';
export const POPUP_TOGGLE_FORWARD_VISIBLE = 'POPUP_TOGGLE_FORWARD_VISIBLE';
export const POPUP_TOGGLE_SEND_VISIBLE = 'POPUP_TOGGLE_SEND_VISIBLE';

export interface IPopupState {
  popup: {
    visible: boolean;
    children: JSX.Element;
    closeable: boolean;
    buttonBackVisible: boolean;
    buttonForwardVisible: boolean;
    buttonSendVisible: boolean;
  };
}
interface TogglePopupVisible {
  type: typeof POPUP_TOGGLE_VISIBLE;
  payload: boolean;
}
interface ChangePopupChildren {
  type: typeof POPUP_CHILDREN_CHANGE;
  payload: JSX.Element;
}
interface TogglePopupCloseable {
  type: typeof POPUP_TOGGLE_CLOSEABLE;
  payload: boolean;
}
interface TogglePopupBackVisible {
  type: typeof POPUP_TOGGLE_BACK_VISIBLE;
  payload: boolean;
}
interface TogglePopupForwardVisible {
  type: typeof POPUP_TOGGLE_FORWARD_VISIBLE;
  payload: boolean;
}
interface TogglePopupSendVisible {
  type: typeof POPUP_TOGGLE_SEND_VISIBLE;
  payload: boolean;
}

export type PopupActionsCreators =
  | TogglePopupVisible
  | ChangePopupChildren
  | TogglePopupBackVisible
  | TogglePopupForwardVisible
  | TogglePopupSendVisible
  | TogglePopupCloseable;
