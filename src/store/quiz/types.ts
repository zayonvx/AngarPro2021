export const QUIZ_TOGGLE_VISIBLE = 'QUIZ_TOGGLE_VISIBLE';
export const QUIZ_CHANGE_PAGE = 'QUIZ_CHANGE_PAGE';
export const QUIZ_TOGGLE_BACK_VISIBLE = 'QUIZ_TOGGLE_BACK_VISIBLE';
export const QUIZ_TOGGLE_FORWARD_VISIBLE = 'QUIZ_TOGGLE_FORWARD_VISIBLE';
export const QUIZ_TOGGLE_SEND_VISIBLE = 'QUIZ_TOGGLE_SEND_VISIBLE';

export interface QuizState {
  visible: boolean;
  currentPage: number;
  buttonBackVisible: boolean;
  buttonForwardVisible: boolean;
  buttonSendVisible: boolean;
}

interface QuizToggleVisible {
  type: typeof QUIZ_TOGGLE_VISIBLE;
  payload: boolean;
}

interface QuizChangePage {
  type: typeof QUIZ_CHANGE_PAGE;
  payload: number;
}

interface QuizToggleBackVisible {
  type: typeof QUIZ_TOGGLE_BACK_VISIBLE;
  payload: boolean;
}

interface QuizToggleForwardVisible {
  type: typeof QUIZ_TOGGLE_FORWARD_VISIBLE;
  payload: boolean;
}

interface QuizToggleSendVisible {
  type: typeof QUIZ_TOGGLE_SEND_VISIBLE;
  payload: boolean;
}
export type QuizActionsCreators =
  | QuizToggleVisible
  | QuizChangePage
  | QuizToggleBackVisible
  | QuizToggleForwardVisible
  | QuizToggleSendVisible;
