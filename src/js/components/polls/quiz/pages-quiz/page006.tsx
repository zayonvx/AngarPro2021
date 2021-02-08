import React, { SyntheticEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import InputRange from '../../input-range/input-range';
import store from '../../../../../store/store';
import { buildingChangeHeight } from '../../../../../store/building/actions';
import { IBuildingState } from '../../../../../store/building/types';
import { buildingDefaultSizes } from '../../../../utils/const';

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

  const params = buildingDefaultSizes.heights;

  useEffect(() => {
    const buttonForward = document.getElementById('buttonForward');
    buttonForward.classList.remove('button__accent--disabled');
    if (height === 0) {
      store.dispatch(buildingChangeHeight((params.max + params.min) / 2));
    }
  });

  return (
    <div className="popup__wrapper">
      <PageSubtitle text="Задайте высоту до несущих конструкций" />
      <InputRange params={params} value={height} prefix="" suffix="м" handlerRangeChange={handler} />
    </div>
  );
};

const mapState = (state: IBuildingState) => ({
  height: state.building.height,
});

export default connect(mapState)(QuizPage006);
