import React from 'react';
import { connect } from 'react-redux';
import { IPopupState } from '../../../../store/popup/types';
import styles from './buttons.module.scss';

interface Props {
  visible: boolean;
  handlerClick: () => void;
}

const ButtonBackward = ({ ...props }: Props): JSX.Element => {
  const { visible } = props;
  const { handlerClick } = props;

  if (!visible) return null;

  return (
    <button
      className={`${styles.buttonBackward} button button__transparent button__transparent--dark-gray`}
      type="button"
      onClick={handlerClick}
      id="buttonBackward"
    >
      <span className="button__text">Назад</span>
      <i className="far fa-arrow-left button__icon" />
    </button>
  );
};

const mapState = (state: IPopupState) => ({
  visible: state.popup.buttonBackVisible,
});

export default connect(mapState)(ButtonBackward);
