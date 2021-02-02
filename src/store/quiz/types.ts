export const QUIZ_TOGGLE_VISIBLE = 'QUIZ_TOGGLE_VISIBLE';
export const QUIZ_CHANGE_PAGE = 'QUIZ_CHANGE_PAGE';
export const QUIZ_TOGGLE_BACK_VISIBLE = 'QUIZ_TOGGLE_BACK_VISIBLE';
export const QUIZ_TOGGLE_FORWARD_VISIBLE = 'QUIZ_TOGGLE_FORWARD_VISIBLE';
export const QUIZ_TOGGLE_SEND_VISIBLE = 'QUIZ_TOGGLE_SEND_VISIBLE';
export const QUIZ_CHILDREN_CHANGE = 'QUIZ_CHILDREN_CHANGE';
export const QUIZ_NAME_CHANGE = 'QUIZ_NAME_CHANGE';
export const QUIZ_MAIL_CHANGE = 'QUIZ_MAIL_CHANGE';
export const QUIZ_TEL_CHANGE = 'QUIZ_TEL_CHANGE';

export interface IQuizState {
  quiz: {
    visible: boolean;
    currentPage: number;
    buttonBackVisible: boolean;
    buttonForwardVisible: boolean;
    buttonSendVisible: boolean;
    children: JSX.Element;
    name: string;
    mail: string;
    tel: string;
  };
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

interface QuizChangeChildren {
  type: typeof QUIZ_CHILDREN_CHANGE;
  payload: JSX.Element;
}

interface QuizChangeName {
  type: typeof QUIZ_NAME_CHANGE;
  payload: string;
}
interface QuizChangeMail {
  type: typeof QUIZ_MAIL_CHANGE;
  payload: string;
}
interface QuizChangeTel {
  type: typeof QUIZ_TEL_CHANGE;
  payload: string;
}

export type QuizActionsCreators =
  | QuizToggleVisible
  | QuizChangePage
  | QuizToggleBackVisible
  | QuizToggleForwardVisible
  | QuizToggleSendVisible
  | QuizChangeChildren
  | QuizChangeName
  | QuizChangeMail
  | QuizChangeTel;
