import {
  QUIZ_CHANGE_PAGE,
  QUIZ_CHILDREN_CHANGE,
  QUIZ_MAIL_CHANGE,
  QUIZ_NAME_CHANGE,
  QUIZ_TEL_CHANGE,
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

export const quizChangeChildren = (value: JSX.Element): QuizActionsCreators => ({
  type: QUIZ_CHILDREN_CHANGE,
  payload: value,
});

export const quizChangeName = (value: string): QuizActionsCreators => ({
  type: QUIZ_NAME_CHANGE,
  payload: value,
});

export const quizChangeMail = (value: string): QuizActionsCreators => ({
  type: QUIZ_MAIL_CHANGE,
  payload: value,
});

export const quizChangeTel = (value: string): QuizActionsCreators => ({
  type: QUIZ_TEL_CHANGE,
  payload: value,
});
