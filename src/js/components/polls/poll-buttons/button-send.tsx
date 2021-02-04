import React from 'react';
import { connect } from 'react-redux';
import { IPopupState } from '../../../../store/popup/types';

interface Props {
  visible: boolean;
  handlerClick: () => void;
}

const ButtonSend = ({ ...props }: Props): JSX.Element => {
  const { visible } = props;
  const { handlerClick } = props;

  if (!visible) return null;

  return (
    <button
      className="button button__accent button__accent--dark-gray"
      type="button"
      onClick={handlerClick}
      id="buttonSend"
    >
      Отправить
    </button>
  );
};

const mapState = (state: IPopupState) => ({
  visible: state.popup.buttonSendVisible,
});

export default connect(mapState)(ButtonSend);
