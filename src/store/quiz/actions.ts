import {
  QUIZ_CHANGE_PAGE,
  QUIZ_TOGGLE_BACK_VISIBLE,
  QUIZ_TOGGLE_FORWARD_VISIBLE,
  QUIZ_TOGGLE_SEND_VISIBLE,
  QUIZ_TOGGLE_VISIBLE,
  QuizActionsCreators,
} from './types';

export const quizToggleVisible = (value: boolean): QuizActionsCreators => ({
  type: QUIZ_TOGGLE_VISIBLE,
  payload: value,
});

export const quizChangePage = (value: number): QuizActionsCreators => ({
  type: QUIZ_CHANGE_PAGE,
  payload: value,
});

export const quizChangeBackVisible = (value: boolean): QuizActionsCreators => ({
  type: QUIZ_TOGGLE_BACK_VISIBLE,
  payload: value,
});

export const quizChangeForwardVisible = (value: boolean): QuizActionsCreators => ({
  type: QUIZ_TOGGLE_FORWARD_VISIBLE,
  payload: value,
});

export const quizChangeSendVisible = (value: boolean): QuizActionsCreators => ({
  type: QUIZ_TOGGLE_SEND_VISIBLE,
  payload: value,
});
