import { initialState } from '../initial-state';
import {
  QUIZ_CHANGE_PAGE,
  QUIZ_TOGGLE_BACK_VISIBLE,
  QUIZ_TOGGLE_FORWARD_VISIBLE,
  QUIZ_TOGGLE_SEND_VISIBLE,
  QUIZ_TOGGLE_VISIBLE,
  QuizActionsCreators,
  QuizState,
} from './types';

const quizRedusers = (state = initialState.quiz, action: QuizActionsCreators): QuizState => {
  switch (action.type) {
    case QUIZ_TOGGLE_VISIBLE:
      return { ...state, visible: action.payload };
    case QUIZ_CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    case QUIZ_TOGGLE_BACK_VISIBLE:
      return { ...state, buttonBackVisible: action.payload };
    case QUIZ_TOGGLE_FORWARD_VISIBLE:
      return { ...state, buttonForwardVisible: action.payload };
    case QUIZ_TOGGLE_SEND_VISIBLE:
      return { ...state, buttonSendVisible: action.payload };
    default:
      return state;
  }
};

export default quizRedusers;
