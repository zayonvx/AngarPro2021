import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import { IInitialState } from '../../../../../store/initial-state';
import InputRange from '../../input-range/input-range';
import { quizDefaultSizes } from '../_const';
import store from '../../../../../store/store';
import { buildingChangeLength } from '../../../../../store/building/actions';

interface Props {
  length: number;
}

const QuizPage005 = ({ ...props }: Props): JSX.Element => {
  const { length } = props;
  const handler = (evt: SyntheticEvent) => {
    const e = evt.currentTarget as HTMLInputElement;
    const newLength = Number(e.value);
    store.dispatch(buildingChangeLength(newLength));
  };

  const defaultWidth = Math.round((quizDefaultSizes.length.min + quizDefaultSizes.length.max) / 2);
  const currentWidth = length === 0 ? defaultWidth : length;
  const params = quizDefaultSizes.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
      <PageSubtitle text="Задайте длину здания" />
      <InputRange params={params} value={currentWidth} prefix="" suffix="м" handlerRangeChange={handler} />
    </div>
  );
};

const mapState = (state: IInitialState) => ({
  length: state.building.length,
});

export default connect(mapState)(QuizPage005);
