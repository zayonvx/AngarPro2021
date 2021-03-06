import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { IBuildingState } from '../../../../../store/building/types';
import styles from './page003.module.scss';
import DropDownList from '../../drop-down-list/drop-down-list';
import {
  CALC_DOORS,
  CALC_DOORS_PROFNASTIL,
  CALC_DOORS_SANDWICH,
  CALC_DOORS_TENT,
  CALC_GATES,
  CALC_GATES_PROFNASTIL,
  CALC_GATES_SANDWICH,
  CALC_GATES_TENT,
  CALC_WINDOWS,
} from '../../../../features/calculator/constants/calc-constants-general';
import store from '../../../../../store/store';
import {
  buildingChangeDoorsCount,
  buildingChangeDoorsType,
  buildingChangeGatesCount,
  buildingChangeGatesHeight,
  buildingChangeGatesType,
  buildingChangeGatesWidth,
  buildingChangeWindowsType,
} from '../../../../../store/building/actions';
import InputRange from '../../input-range/input-range';

interface Props {
  gatesCount: number;
  gatesWidth: number;
  gatesHeight: number;
  gatesType: number;
  doorsCount: number;
  doorsType: number;
  windowsRows: number;
  fences: number;
}

const gatesDropDownTypes = (fencesId: number) => {
  let gatesTypesArray = [];
  switch (fencesId) {
    case 0:
      gatesTypesArray = CALC_GATES_TENT;
      break;
    case 1:
      gatesTypesArray = CALC_GATES_PROFNASTIL;
      break;
    case 2:
      gatesTypesArray = CALC_GATES_SANDWICH;
      break;
    default:
      break;
  }
  const typeNamesArray: Array<{ name: string; id: number }> = [];
  gatesTypesArray.forEach((type) => {
    typeNamesArray.push(CALC_GATES.types.find((it) => it.id === type));
  });
  return typeNamesArray;
};
const doorsDropDownTypes = (fencesId: number) => {
  let doorsTypesArray = [];
  switch (fencesId) {
    case 0:
      doorsTypesArray = CALC_DOORS_TENT;
      break;
    case 1:
      doorsTypesArray = CALC_DOORS_PROFNASTIL;
      break;
    case 2:
      doorsTypesArray = CALC_DOORS_SANDWICH;
      break;
    default:
      break;
  }
  const typeNamesArray: Array<{ name: string; id: number }> = [];
  doorsTypesArray.forEach((type) => {
    typeNamesArray.push(CALC_DOORS.types.find((it) => it.id === type));
  });
  return typeNamesArray;
};
const handlerInputList = (evt: SyntheticEvent) => {
  const e = evt.currentTarget as HTMLInputElement;
  switch (e.id) {
    case 'inputWidth':
      store.dispatch(buildingChangeGatesWidth(Number(e.value)));
      break;
    case 'inputHeight':
      store.dispatch(buildingChangeGatesHeight(Number(e.value)));
      break;
    default:
      break;
  }
};
const handlerDropDownList = (evt: SyntheticEvent) => {
  const e = evt.currentTarget as HTMLInputElement;
  let gatesId: number;
  let currentGatesCount: number;
  let doorsId: number;
  let currentDoorsCount: number;
  let windowsId: number;
  let defaultGatesWidth: number;
  let defaultGatesHeight: number;

  switch (e.id) {
    case 'dropGatesType':
      gatesId = CALC_GATES.types.find((it) => e.value === it.name).id;
      store.dispatch(buildingChangeGatesType(gatesId));

      defaultGatesWidth = (CALC_GATES.types[gatesId].minWidth + CALC_GATES.types[gatesId].maxWidth) / 2;
      defaultGatesHeight = (CALC_GATES.types[gatesId].minHeight + CALC_GATES.types[gatesId].maxHeight) / 2;

      store.dispatch(buildingChangeGatesHeight(defaultGatesHeight));
      store.dispatch(buildingChangeGatesWidth(defaultGatesWidth));

      if (gatesId > 0) {
        store.dispatch(buildingChangeGatesCount(1));
      } else {
        store.dispatch(buildingChangeGatesCount(0));
      }

      break;
    case 'dropDoorsType':
      doorsId = CALC_DOORS.types.find((it) => e.value === it.name).id;
      store.dispatch(buildingChangeDoorsType(doorsId));
      if (doorsId > 0) {
        store.dispatch(buildingChangeDoorsCount(1));
      } else {
        store.dispatch(buildingChangeDoorsCount(0));
      }
      break;
    case 'dropWindowsType':
      windowsId = CALC_WINDOWS.find((it) => e.value === it.name).id;
      store.dispatch(buildingChangeWindowsType(windowsId));
      break;
    case 'dropGatesCount':
      currentGatesCount = Number(e.value);
      store.dispatch(buildingChangeGatesCount(currentGatesCount));
      break;
    case 'dropDoorsCount':
      currentDoorsCount = Number(e.value);
      store.dispatch(buildingChangeDoorsCount(currentDoorsCount));
      break;

    default:
      break;
  }
};

const CalcPage003 = ({ ...props }: Props): JSX.Element => {
  const { gatesType, doorsType, gatesCount, doorsCount, windowsRows, fences } = props;

  const paramsWidth = () => {
    const min = CALC_GATES.types[gatesType].minWidth;
    const max = CALC_GATES.types[gatesType].maxWidth;
    const { step } = CALC_GATES;
    return { min, max, step };
  };
  const paramsHeight = () => {
    const min = CALC_GATES.types[gatesType].minHeight;
    const max = CALC_GATES.types[gatesType].maxHeight;
    const { step } = CALC_GATES;
    return { min, max, step };
  };

  return (
    <div className="popup__wrapper">
      <div className={styles.gatesWrapper}>
        <DropDownList
          legend="????????????"
          array={gatesDropDownTypes(store.getState().building.fences)}
          selected={gatesType}
          handlerChange={handlerDropDownList}
          id="dropGatesType"
        />
        {gatesType !== 0 ? (
          <div className={styles.countWrapper}>
            <DropDownList
              legend="??-????"
              array={CALC_GATES.quantities}
              selected={gatesCount - 1}
              handlerChange={handlerDropDownList}
              id="dropGatesCount"
            />
          </div>
        ) : null}
      </div>
      <ul className={styles.inputList} style={gatesType !== 0 ? {} : { display: 'none' }}>
        <li key="001">
          <InputRange
            params={paramsWidth()}
            value={store.getState().building.gatesWidth}
            prefix=""
            suffix="??"
            handlerRangeChange={handlerInputList}
            id="inputWidth"
            legend="???????????? ??????????"
          />
        </li>
        <li key="002">
          <InputRange
            params={paramsHeight()}
            value={store.getState().building.gatesHeight}
            prefix=""
            suffix="??"
            handlerRangeChange={handlerInputList}
            id="inputHeight"
            legend="???????????? ??????????"
          />
        </li>
      </ul>
      <div className={styles.doorsWrapper}>
        <DropDownList
          legend="??????????"
          array={doorsDropDownTypes(store.getState().building.fences)}
          selected={doorsType}
          handlerChange={handlerDropDownList}
          id="dropDoorsType"
        />
        {doorsType !== 0 ? (
          <div className={styles.countWrapper}>
            <DropDownList
              legend="??-????"
              array={CALC_DOORS.quantities}
              selected={doorsCount - 1}
              handlerChange={handlerDropDownList}
              id="dropDoorsCount"
            />
          </div>
        ) : null}
      </div>
      {fences === 1 || fences === 2 ? (
        <div className={styles.windowsWrapper}>
          <DropDownList
            legend="????????"
            array={CALC_WINDOWS}
            selected={windowsRows}
            handlerChange={handlerDropDownList}
            id="dropWindowsType"
          />
        </div>
      ) : null}
    </div>
  );
};

const mapState = (state: IBuildingState) => ({
  gatesCount: state.building.gatesCount,
  gatesWidth: state.building.gatesWidth,
  gatesHeight: state.building.gatesHeight,
  gatesType: state.building.gatesType,
  doorsCount: state.building.doorsCount,
  doorsType: state.building.doorsType,
  windowsRows: state.building.windowsRows,
  fences: state.building.fences,
});

export default connect(mapState)(CalcPage003);
