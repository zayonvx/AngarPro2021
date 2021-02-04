import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import InputRange from '../../input-range/input-range';
import store from '../../../../../store/store';
import { buildingChangeLength } from '../../../../../store/building/actions';
import { IBuildingState } from '../../../../../store/building/types';
import { buildingDefaultSizes } from '../../../../utils/const';

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

  const params = buildingDefaultSizes.length;

  return (
    <div className="popup__wrapper">
      <PageSubtitle text="Задайте длину здания" />
      <InputRange params={params} value={length} prefix="" suffix="м" handlerRangeChange={handler} />
    </div>
  );
};

const mapState = (state: IBuildingState) => ({
  length: state.building.length,
});

export default connect(mapState)(QuizPage005);
