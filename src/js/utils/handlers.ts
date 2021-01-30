import store from '../../store/store';
import { togglePopupVisible } from '../../store/popup/actions';
import { changeCurrentPhoto } from '../../store/gallery/actions';

export const handlerClickPopup = (): void => {
  const { mapVisible } = store.getState().gallery;
  if (!mapVisible) {
    store.dispatch(togglePopupVisible(false));
    store.dispatch(changeCurrentPhoto('001'));
  }
};

export const noErrors = null;
