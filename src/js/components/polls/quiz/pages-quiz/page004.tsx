import React, { SyntheticEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import InputRange from '../../input-range/input-range';
import store from '../../../../../store/store';
import { buildingChangeWidth } from '../../../../../store/building/actions';
import { IBuildingState } from '../../../../../store/building/types';
import { buildingDefaultSizes } from '../../../../utils/const';

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
  const params = buildingDefaultSizes.width;

  useEffect(() => {
    if (width === 0) {
      store.dispatch(buildingChangeWidth((params.max + params.min) / 2));
    }
  });

  return (
    <div className="popup__wrapper">
      <PageSubtitle text="Задайте ширину здания" />
      <InputRange params={params} value={width} prefix="" suffix="м" handlerRangeChange={handler} />
    </div>
  );
};

const mapState = (state: IBuildingState) => ({
  width: state.building.width,
});

export default connect(mapState)(QuizPage004);
