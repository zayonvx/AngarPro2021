import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleBodyNoScroll } from '../../utils/functions';
import store from '../../../store/store';
import { togglePopupVisible } from '../../../store/popup/actions';
import { IPopupState } from '../../../store/popup/types';

interface Props {
  visible: boolean;
  children: JSX.Element;
  closeable: boolean;
}

const PopupWrapper = ({ ...props }: Props): JSX.Element => {
  const { visible } = props;
  const { children } = props;
  const { closeable } = props;
  toggleBodyNoScroll(visible);
  const className = visible ? 'popup active' : 'popup';

  const handlerPressPopup = (event) => {
    const e = event as KeyboardEvent;
    e.stopPropagation();
    const { key } = e;
    return key;
  };

  const handlerClickPopup = (): void => {
    if (closeable) {
      store.dispatch(togglePopupVisible(false));
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener('keydown', handlerPressPopup);
    }
    return document.removeEventListener('keydown', handlerPressPopup);
  });

  return (
    <div className={className} onClick={handlerClickPopup} onKeyPress={handlerPressPopup} role="dialog">
      <div
        className="popup__window"
        onClick={(e) => e.stopPropagation()}
        onKeyPress={(e) => e.stopPropagation()}
        id="PopupWindow"
        role="dialog"
      >
        {children}
      </div>
    </div>
  );
};

const mapState = (state: IPopupState) => ({
  visible: state.popup.visible,
  children: state.popup.children,
  closeable: state.popup.closeable,
});

export default connect(mapState)(PopupWrapper);
