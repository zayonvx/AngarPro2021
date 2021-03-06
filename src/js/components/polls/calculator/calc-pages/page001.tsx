import React, { SyntheticEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import InputRange from '../../input-range/input-range';
import { IBuildingState } from '../../../../../store/building/types';
import store from '../../../../../store/store';
import {
  buildingChangeArchType,
  buildingChangeHeight,
  buildingChangeLength,
  buildingChangeRegion,
  buildingChangeWidth,
} from '../../../../../store/building/actions';
import {
  CALC_ARCHITECTURAL_TYPES,
  CALC_REGIONS,
} from '../../../../features/calculator/constants/calc-constants-general';
import { buildingDefaultSizes } from '../../../../utils/const';
import DropDownList from '../../drop-down-list/drop-down-list';

interface Props {
  width: number;
  length: number;
  height: number;
  archType: number;
  region: number;
}

const CalcPage001 = ({ ...props }: Props): JSX.Element => {
  const { archType } = props;
  let localWidth: number;
  let localLength: number;
  let localHeight: number;

  const paramsWidth = () => {
    const min = CALC_ARCHITECTURAL_TYPES[archType].minWidth;
    const max = CALC_ARCHITECTURAL_TYPES[archType].maxWidth;
    const { step } = buildingDefaultSizes.width;
    localWidth = (min + max) / 2;
    return { min, max, step };
  };
  const paramsLength = () => {
    const { min } = buildingDefaultSizes.length;
    const { max } = buildingDefaultSizes.length;
    const { step } = buildingDefaultSizes.length;
    localLength = (min + max) / 2;
    return { min, max, step };
  };
  const paramsHeight = () => {
    const { min } = buildingDefaultSizes.heights;
    const { max } = buildingDefaultSizes.heights;
    const { step } = buildingDefaultSizes.heights;
    localHeight = (min + max) / 2;
    return { min, max, step };
  };

  const handlerRangeInputs = (evt: SyntheticEvent) => {
    const e = evt.currentTarget as HTMLInputElement;
    switch (e.id) {
      case 'inputWidth':
        store.dispatch(buildingChangeWidth(Number(e.value)));
        break;
      case 'inputLength':
        store.dispatch(buildingChangeLength(Number(e.value)));
        break;
      case 'inputHeight':
        store.dispatch(buildingChangeHeight(Number(e.value)));
        break;
      default:
        break;
    }
  };
  const handlerDropDownList = (evt: SyntheticEvent) => {
    const e = evt.currentTarget as HTMLInputElement;
    let regionId: number;
    let archId: number;

    switch (e.id) {
      case 'dropRegion':
        regionId = CALC_REGIONS.find((it) => e.value === it.name).id;
        store.dispatch(buildingChangeRegion(regionId));
        break;
      case 'dropArchType':
        archId = CALC_ARCHITECTURAL_TYPES.find((it) => e.value === it.name).id;
        store.dispatch(buildingChangeArchType(archId));
        store.dispatch(buildingChangeWidth(0));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const { width } = store.getState().building;
    const { length } = store.getState().building;
    const { height } = store.getState().building;

    if (width === 0) {
      store.dispatch(buildingChangeWidth(localWidth));
    }
    if (length === 0) {
      store.dispatch(buildingChangeLength(localLength));
    }
    if (height === 0) {
      store.dispatch(buildingChangeHeight(localHeight));
    }
  });

  return (
    <div className="popup__wrapper">
      <DropDownList
        legend="???????????? ??????????????????????????"
        array={CALC_REGIONS}
        selected={store.getState().building.region}
        handlerChange={handlerDropDownList}
        id="dropRegion"
      />
      <DropDownList
        legend="?????????????????????????? ?????? ????????????"
        array={CALC_ARCHITECTURAL_TYPES}
        selected={store.getState().building.archType}
        handlerChange={handlerDropDownList}
        id="dropArchType"
      />
      <InputRange
        params={paramsWidth()}
        value={store.getState().building.width}
        prefix=""
        suffix="??"
        handlerRangeChange={handlerRangeInputs}
        id="inputWidth"
        legend="???????????? ????????????"
      />
      <InputRange
        params={paramsLength()}
        value={store.getState().building.length}
        prefix=""
        suffix="??"
        handlerRangeChange={handlerRangeInputs}
        id="inputLength"
        legend="?????????? ????????????"
      />
      <InputRange
        params={paramsHeight()}
        value={store.getState().building.height}
        prefix=""
        suffix="??"
        handlerRangeChange={handlerRangeInputs}
        id="inputHeight"
        legend="???????????????? ????????????"
      />
    </div>
  );
};

const mapState = (state: IBuildingState) => ({
  width: state.building.width,
  length: state.building.length,
  height: state.building.height,
  archType: state.building.archType,
  region: state.building.region,
});

export default connect(mapState)(CalcPage001);
