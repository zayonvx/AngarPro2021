import React from 'react';
import { connect } from 'react-redux';
import { IInitialState } from '../../../../store/initial-state';

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
      style={{ marginRight: '1rem' }}
      id="buttonBackward"
    >
      Назад
    </button>
  );
};

const mapState = (state: IInitialState) => ({
  visible: state.quiz.buttonBackVisible,
});

export default connect(mapState)(ButtonBackward);
