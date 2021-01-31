import React, { SyntheticEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import { IInitialState } from '../../../../../store/initial-state';
import InputRange from '../../input-range/input-range';
import { quizDefaultSizes } from '../_const';
import store from '../../../../../store/store';
import { buildingChangeHeight } from '../../../../../store/building/actions';

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

  const defaultWidth = Math.round((quizDefaultSizes.heights.min + quizDefaultSizes.heights.max) / 2);
  const currentWidth = height === 0 ? defaultWidth : height;
  const params = quizDefaultSizes.heights;

  useEffect(() => {
    const buttonForward = document.getElementById('buttonForward');
    buttonForward.classList.remove('button__accent--disabled');
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
      <PageSubtitle text="Задайте высоту до несущих конструкций" />
      <InputRange params={params} value={currentWidth} prefix="" suffix="м" handlerRangeChange={handler} />
    </div>
  );
};

const mapState = (state: IInitialState) => ({
  height: state.building.height,
});

export default connect(mapState)(QuizPage006);
