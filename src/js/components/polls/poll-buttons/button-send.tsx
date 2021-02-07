import React from 'react';
import { connect } from 'react-redux';
import { IPopupState } from '../../../../store/popup/types';
import styles from './buttons.module.scss';

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
      className={`${styles.buttonSend} button button__accent button__accent--bordered`}
      type="button"
      onClick={handlerClick}
      id="buttonSend"
    >
      <span className="button__text">Отправить</span>
      <i className="far fa-arrow-right button__icon" />
    </button>
  );
};

const mapState = (state: IPopupState) => ({
  visible: state.popup.buttonSendVisible,
});

export default connect(mapState)(ButtonSend);
