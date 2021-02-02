import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import InputRange from '../../input-range/input-range';
import { quizDefaultSizes } from '../_const';
import store from '../../../../../store/store';
import { buildingChangeLength } from '../../../../../store/building/actions';
import { IBuildingState } from '../../../../../store/building/types';

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

  const defaultLength = Math.round((quizDefaultSizes.length.min + quizDefaultSizes.length.max) / 2);
  const currentLength = length === 0 ? defaultLength : length;
  store.dispatch(buildingChangeLength(currentLength));
  const params = quizDefaultSizes.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
      <PageSubtitle text="Задайте длину здания" />
      <InputRange params={params} value={currentLength} prefix="" suffix="м" handlerRangeChange={handler} />
    </div>
  );
};

const mapState = (state: IBuildingState) => ({
  length: state.building.length,
});

export default connect(mapState)(QuizPage005);
