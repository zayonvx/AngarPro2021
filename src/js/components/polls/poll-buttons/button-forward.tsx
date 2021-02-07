import React from 'react';
import { connect } from 'react-redux';
import { IPopupState } from '../../../../store/popup/types';
import styles from './buttons.module.scss';

interface Props {
  visible: boolean;
  handlerClick: () => void;
}

const ButtonForward = ({ ...props }: Props): JSX.Element => {
  const { visible } = props;
  const { handlerClick } = props;

  if (!visible) return null;

  return (
    <button
      className={`${styles.buttonForward} button button__accent button__accent--bordered`}
      type="button"
      onClick={handlerClick}
      id="buttonForward"
    >
      <span className="button__text">Далее</span>
      <i className="far fa-arrow-right button__icon" />
    </button>
  );
};

const mapState = (state: IPopupState) => ({
  visible: state.popup.buttonForwardVisible,
});

export default connect(mapState)(ButtonForward);
