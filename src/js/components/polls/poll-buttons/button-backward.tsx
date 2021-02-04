import React from 'react';
import { connect } from 'react-redux';
import { IPopupState } from '../../../../store/popup/types';

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
      className="button button__transparent button__transparent--dark-gray "
      type="button"
      onClick={handlerClick}
      id="buttonBackward"
    >
      Назад
    </button>
  );
};

const mapState = (state: IPopupState) => ({
  visible: state.popup.buttonBackVisible,
});

export default connect(mapState)(ButtonBackward);
