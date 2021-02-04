import store from '../../../../store/store';
import { togglePopupBackward, togglePopupForward, togglePopupSend } from '../../../../store/popup/actions';
import { quizChangeChildren } from '../../../../store/quiz/actions';
import { calculatorChangeChildren } from '../../../../store/calculator/actions';

export const setBackButtonVisible = (value: boolean): void => {
  store.dispatch(togglePopupBackward(value));
};
export const setForwardButtonVisible = (value: boolean): void => {
  store.dispatch(togglePopupForward(value));
};
export const setSendButtonVisible = (value: boolean): void => {
  store.dispatch(togglePopupSend(value));
};
export const sendQuizPageLayout = (layout: JSX.Element): void => {
  store.dispatch(quizChangeChildren(layout));
};
export const sendCalcPageLayout = (layout: JSX.Element): void => {
  store.dispatch(calculatorChangeChildren(layout));
};
