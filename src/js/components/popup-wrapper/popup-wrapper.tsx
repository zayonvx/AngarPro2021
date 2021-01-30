import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IInitialState } from '../../../store/initial-state';
import { toggleBodyNoScroll } from '../../utils/functions';
import { handlerClickPopup } from '../../utils/handlers';

const mapState = (state: IInitialState) => ({ visible: state.popup.visible, children: state.popup.children });
const connector = connect(mapState);
type StateProps = ConnectedProps<typeof connector>;

const PopupWrapper = ({ ...props }: StateProps): JSX.Element => {
  const { visible } = props;
  const { children } = props;
  toggleBodyNoScroll(visible);
  const className = visible ? 'popup active' : 'popup';

  const handlerPressPopup = (event) => {
    const e = event as KeyboardEvent;
    e.stopPropagation();
    const { key } = e;
    return key;
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

export default connector(PopupWrapper);
