import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import {
  CALC_FENSES,
  CALC_FLOOR,
  CALC_FOUNDATION,
  CALC_FOUNDATION_PROFNASTIL,
  CALC_FOUNDATION_SANDWICH,
  CALC_FOUNDATION_TENT,
} from '../../../../features/calculator/constants/calc-constants-general';
import store from '../../../../../store/store';
import {
  buildingChangeDoorsCount,
  buildingChangeDoorsType,
  buildingChangeFences,
  buildingChangeFloor,
  buildingChangeFoundation,
  buildingChangeGatesCount,
  buildingChangeGatesType,
  buildingChangeWindowsType,
} from '../../../../../store/building/actions';
import DropDownList from '../../drop-down-list/drop-down-list';
import { IBuildingState } from '../../../../../store/building/types';

interface Props {
  fences: number;
  foundation: number;
  floor: number;
}

const CalcPage002 = ({ ...props }: Props): JSX.Element => {
  const { fences, foundation, floor } = props;

  const setDefaultFoundation = (fencesId) => {
    switch (fencesId) {
      case 0:
        store.dispatch(buildingChangeFoundation(CALC_FOUNDATION_TENT[0]));
        break;
      case 1:
        store.dispatch(buildingChangeFoundation(CALC_FOUNDATION_PROFNASTIL[0]));
        break;
      case 2:
        store.dispatch(buildingChangeFoundation(CALC_FOUNDATION_SANDWICH[0]));
        break;
      default:
        break;
    }
  };

  const handlerDropDownList = (evt: SyntheticEvent) => {
    const e = evt.currentTarget as HTMLInputElement;
    let fountationId: number;
    let floorId: number;
    let fencesId: number;

    switch (e.id) {
      case 'dropFoundation':
        fountationId = CALC_FOUNDATION.find((it) => e.value === it.name).id;
        store.dispatch(buildingChangeFoundation(fountationId));
        break;
      case 'dropFloor':
        floorId = CALC_FLOOR.type.find((it) => e.value === it.name).id;
        store.dispatch(buildingChangeFloor(floorId));
        break;
      case 'dropFences':
        fencesId = CALC_FENSES.find((it) => e.value === it.name).id;
        store.dispatch(buildingChangeFences(fencesId));
        store.dispatch(buildingChangeGatesType(0));
        store.dispatch(buildingChangeGatesCount(0));
        store.dispatch(buildingChangeDoorsType(0));
        store.dispatch(buildingChangeDoorsCount(0));
        store.dispatch(buildingChangeWindowsType(0));
        setDefaultFoundation(fencesId);
        break;
      default:
        break;
    }
  };

  const foundationDropDownTypes = (fencesId) => {
    let typesArray = [];
    switch (fencesId) {
      case 0:
        typesArray = CALC_FOUNDATION_TENT;
        break;
      case 1:
        typesArray = CALC_FOUNDATION_PROFNASTIL;
        break;
      case 2:
        typesArray = CALC_FOUNDATION_SANDWICH;
        break;
      default:
        break;
    }
    const typeNamesArray: Array<{ name: string; id: number }> = [];
    typesArray.forEach((type) => {
      typeNamesArray.push(CALC_FOUNDATION.find((it) => it.id === type));
    });
    return typeNamesArray;
  };

  return (
    <div className="popup__wrapper">
      <DropDownList
        legend="Материал кровли и стен"
        array={CALC_FENSES}
        selected={fences}
        handlerChange={handlerDropDownList}
        id="dropFences"
      />
      <DropDownList
        legend="Тип фундамента"
        array={foundationDropDownTypes(fences)}
        selected={foundation}
        handlerChange={handlerDropDownList}
        id="dropFoundation"
      />
      {foundation > 0 && foundation < 4 ? (
        <DropDownList
          legend="Пол"
          array={CALC_FLOOR.type}
          selected={floor}
          handlerChange={handlerDropDownList}
          id="dropFloor"
        />
      ) : null}
    </div>
  );
};

const mapState = (state: IBuildingState) => ({
  foundation: state.building.foundation,
  floor: state.building.floor,
  fences: state.building.fences,
});

export default connect(mapState)(CalcPage002);
