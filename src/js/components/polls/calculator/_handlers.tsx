import React from 'react';
import store from '../../../../store/store';
import {
  changePopupChildren,
  togglePopupBackward,
  togglePopupCloseable,
  togglePopupForward,
  togglePopupVisible,
} from '../../../../store/popup/actions';
import {
  calculatorChangeChildren,
  calculatorChangePage,
  calculatorToggleVisible,
} from '../../../../store/calculator/actions';
import Calculator from './calculator';
import CalcPage001 from './calc-pages/page001';
import {
  buildingChangeFences,
  buildingChangeHeight,
  buildingChangeLength,
  buildingChangeWidth,
} from '../../../../store/building/actions';
import { quizToggleVisible } from '../../../../store/quiz/actions';

const calculatorOpen = (): void => {
  const { visible } = store.getState().calculator;

  if (!visible) {
    store.dispatch(quizToggleVisible(false));
    store.dispatch(calculatorToggleVisible(true));
    store.dispatch(buildingChangeWidth(0));
    store.dispatch(buildingChangeLength(0));
    store.dispatch(buildingChangeHeight(0));
    store.dispatch(buildingChangeFences(0));
  }
  store.dispatch(togglePopupForward(true));
  store.dispatch(togglePopupBackward(false));
  store.dispatch(togglePopupCloseable(false));
  store.dispatch(calculatorChangePage(1));
  store.dispatch(togglePopupVisible(true));
  store.dispatch(calculatorChangeChildren(<CalcPage001 />));
  store.dispatch(changePopupChildren(<Calculator />));
};

export default calculatorOpen;
