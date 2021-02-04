import initialState from './initial-state';
import {
  IQuizState,
  QUIZ_CHANGE_PAGE,
  QUIZ_CHILDREN_CHANGE,
  QUIZ_MAIL_CHANGE,
  QUIZ_NAME_CHANGE,
  QUIZ_TEL_CHANGE,
  QUIZ_TOGGLE_VISIBLE,
  QuizActionsCreators,
} from './types';

const quizRedusers = (state = initialState.quiz, action: QuizActionsCreators): IQuizState['quiz'] => {
  switch (action.type) {
    case QUIZ_TOGGLE_VISIBLE:
      return { ...state, visible: action.payload };
    case QUIZ_CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    case QUIZ_CHILDREN_CHANGE:
      return { ...state, children: action.payload };
    case QUIZ_NAME_CHANGE:
      return { ...state, name: action.payload };
    case QUIZ_MAIL_CHANGE:
      return { ...state, mail: action.payload };
    case QUIZ_TEL_CHANGE:
      return { ...state, tel: action.payload };
    default:
      return state;
  }
};

export default quizRedusers;
