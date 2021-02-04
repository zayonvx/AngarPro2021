import React from 'react';
import store from '../../../../store/store';
import { quizChangeChildren, quizChangePage, quizToggleVisible } from '../../../../store/quiz/actions';
import QuizPage001 from './pages-quiz/page001';
import {
  changePopupChildren,
  togglePopupBackward,
  togglePopupCloseable,
  togglePopupVisible,
} from '../../../../store/popup/actions';
import Quiz from './quiz';
import { calculatorToggleVisible } from '../../../../store/calculator/actions';
import {
  buildingChangeFences,
  buildingChangeHeight,
  buildingChangeLength,
  buildingChangeWidth,
} from '../../../../store/building/actions';

const quizOpen = (): void => {
  const { visible } = store.getState().quiz;

  if (!visible) {
    store.dispatch(calculatorToggleVisible(false));
    store.dispatch(quizToggleVisible(true));
    store.dispatch(buildingChangeWidth(0));
    store.dispatch(buildingChangeLength(0));
    store.dispatch(buildingChangeHeight(0));
    store.dispatch(buildingChangeFences(0));
  }
  store.dispatch(togglePopupBackward(false));
  store.dispatch(togglePopupCloseable(false));
  store.dispatch(quizChangePage(1));
  store.dispatch(togglePopupVisible(true));
  store.dispatch(quizChangeChildren(<QuizPage001 />));
  store.dispatch(changePopupChildren(<Quiz />));
};

export default quizOpen;
