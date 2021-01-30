export const POPUP_TOGGLE_VISIBLE = 'POPUP_TOGGLE_VISIBLE';
export const POPUP_CHILDREN_CHANGE = 'POPUP_CHILDREN_CHANGE';

export interface PopupState {
  visible: boolean;
  children: JSX.Element;
}

interface TogglePopupVisible {
  type: typeof POPUP_TOGGLE_VISIBLE;
  payload: boolean;
}

interface ChangePopupChildren {
  type: typeof POPUP_CHILDREN_CHANGE;
  payload: JSX.Element;
}

export type PopupActionsCreators = TogglePopupVisible | ChangePopupChildren;
