import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import InputRange from '../../input-range/input-range';
import { quizDefaultSizes } from '../_const';
import store from '../../../../../store/store';
import { buildingChangeWidth } from '../../../../../store/building/actions';
import { IInitialState } from '../../../../../store/types';

interface Props {
  width: number;
}

const QuizPage004 = ({ ...props }: Props): JSX.Element => {
  const { width } = props;
  const handler = (evt: SyntheticEvent) => {
    const e = evt.currentTarget as HTMLInputElement;
    const newWidth = Number(e.value);
    store.dispatch(buildingChangeWidth(newWidth));
  };

  const defaultWidth = Math.round((quizDefaultSizes.width.min + quizDefaultSizes.width.max) / 2);
  const currentWidth = width === 0 ? defaultWidth : width;
  store.dispatch(buildingChangeWidth(currentWidth));
  const params = quizDefaultSizes.width;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
      <PageSubtitle text="Задайте ширину здания" />
      <InputRange params={params} value={currentWidth} prefix="" suffix="м" handlerRangeChange={handler} />
    </div>
  );
};

const mapState = (state: IInitialState) => ({
  width: state.building.width,
});

export default connect(mapState)(QuizPage004);
