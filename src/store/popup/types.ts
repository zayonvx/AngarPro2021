export const POPUP_TOGGLE_VISIBLE = 'POPUP_TOGGLE_VISIBLE';
export const POPUP_CHILDREN_CHANGE = 'POPUP_CHILDREN_CHANGE';
export const POPUP_TOGGLE_CLOSEABLE = 'POPUP_TOGGLE_CLOSEABLE';

export interface IPopupState {
  popup: {
    visible: boolean;
    children: JSX.Element;
    closeable: boolean;
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

export type PopupActionsCreators = TogglePopupVisible | ChangePopupChildren | TogglePopupCloseable;
