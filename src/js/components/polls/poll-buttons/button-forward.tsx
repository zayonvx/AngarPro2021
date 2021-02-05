import React from 'react';
import { connect } from 'react-redux';
import { IPopupState } from '../../../../store/popup/types';

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
      className="button button__accent button__accent--dark-gray"
      type="button"
      onClick={handlerClick}
      id="buttonForward"
    >
      Далее
    </button>
  );
};

const mapState = (state: IPopupState) => ({
  visible: state.popup.buttonForwardVisible,
});

export default connect(mapState)(ButtonForward);