import React from 'react';
import store from '../../../../store/store';
import {
  quizChangeChildren,
  quizChangePage,
} from '../../../../store/quiz/actions';
import QuizPage001 from './pages-quiz/page001';
import { changePopupChildren, togglePopupCloseable, togglePopupVisible } from '../../../../store/popup/actions';
import Quiz from './quiz';
import { calculatorChangePage } from '../../../../store/calculator/actions';
import Calculator from '../calculator/calculator';

export const handlerOnClickQuiz = (): void => {
  store.dispatch(togglePopupCloseable(false));
  store.dispatch(quizChangePage(1));
  store.dispatch(togglePopupVisible(true));
  store.dispatch(quizChangeChildren(<QuizPage001 />));
  store.dispatch(changePopupChildren(<Quiz />));
};
export const handlerOnClickCalculator = (): void => {
  store.dispatch(calculatorChangePage(1));
  store.dispatch(togglePopupVisible(true));
  store.dispatch(changePopupChildren(<Calculator />));
};
export const handlerOnClickCalculatorClose = (): void => {
  store.dispatch(togglePopupVisible(false));
};
