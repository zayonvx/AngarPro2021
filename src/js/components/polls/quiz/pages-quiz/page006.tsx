import React, { SyntheticEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import InputRange from '../../input-range/input-range';
import { quizDefaultSizes } from '../_const';
import store from '../../../../../store/store';
import { buildingChangeHeight } from '../../../../../store/building/actions';
import { IInitialState } from '../../../../../store/types';

interface Props {
  height: number;
}

const QuizPage006 = ({ ...props }: Props): JSX.Element => {
  const { height } = props;
  const handler = (evt: SyntheticEvent) => {
    const e = evt.currentTarget as HTMLInputElement;
    const newHeight = Number(e.value);
    store.dispatch(buildingChangeHeight(newHeight));
  };

  const defaultHeigth = Math.round((quizDefaultSizes.heights.min + quizDefaultSizes.heights.max) / 2);
  const currentHeigth = height === 0 ? defaultHeigth : height;
  store.dispatch(buildingChangeHeight(currentHeigth));
  const params = quizDefaultSizes.heights;

  useEffect(() => {
    const buttonForward = document.getElementById('buttonForward');
    buttonForward.classList.remove('button__accent--disabled');
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
      <PageSubtitle text="Задайте высоту до несущих конструкций" />
      <InputRange params={params} value={currentHeigth} prefix="" suffix="м" handlerRangeChange={handler} />
    </div>
  );
};

const mapState = (state: IInitialState) => ({
  height: state.building.height,
});

export default connect(mapState)(QuizPage006);
