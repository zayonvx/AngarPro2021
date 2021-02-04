import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import {
  CALC_FENSES,
  CALC_FLOOR,
  CALC_FOUNDATION,
} from '../../../../features/calculator/constants/calc-constants-general';
import store from '../../../../../store/store';
import {
  buildingChangeFences,
  buildingChangeFloor,
  buildingChangeFoundation,
} from '../../../../../store/building/actions';
import DropDownList from '../../drop-down-list/drop-down-list';
import { IBuildingState } from '../../../../../store/building/types';

const CalcPage002 = (): JSX.Element => {
  const handlerDropDownList = (evt: SyntheticEvent) => {
    const e = evt.currentTarget as HTMLInputElement;
    const fountationId = CALC_FOUNDATION.find((it) => e.value === it.name).id;
    const floorId = CALC_FLOOR.type.find((it) => e.value === it.name).id;
    const fencesId = CALC_FENSES.find((it) => e.value === it.name).id;
    switch (e.id) {
      case 'dropFoundation':
        store.dispatch(buildingChangeFoundation(fountationId));
        break;
      case 'dropFloor':
        store.dispatch(buildingChangeFloor(floorId));
        break;
      case 'dropFences':
        store.dispatch(buildingChangeFences(fencesId));
        break;
      default:
        break;
    }
  };

  return (
    <div className="popup__wrapper">
      <DropDownList
        legend="Тип фундамента"
        array={CALC_FOUNDATION}
        selected={store.getState().building.foundation}
        handlerChange={handlerDropDownList}
        id="dropFoundation"
      />
      <DropDownList
        legend="Пол"
        array={CALC_FLOOR.type}
        selected={store.getState().building.floor}
        handlerChange={handlerDropDownList}
        id="dropFloor"
      />
      <DropDownList
        legend="Материал кровли и стен"
        array={CALC_FENSES}
        selected={store.getState().building.fences}
        handlerChange={handlerDropDownList}
        id="dropFences"
      />
    </div>
  );
};

const mapState = (state: IBuildingState) => ({
  foundation: state.building.foundation,
  floor: state.building.floor,
  fences: state.building.fences,
});

export default connect(mapState)(CalcPage002);
