import React from 'react';
import styles from './poll-footer.module.scss';
import ButtonForward from '../poll-buttons/button-forward';
import ButtonBackward from '../poll-buttons/button-backward';
import ButtonSend from '../poll-buttons/button-send';
import store from '../../../../store/store';
import QuizPage002 from '../quiz/pages-quiz/page002';
import QuizPage004 from '../quiz/pages-quiz/page004';
import QuizPage003 from '../quiz/pages-quiz/page003';
import QuizPage005 from '../quiz/pages-quiz/page005';
import QuizPage006 from '../quiz/pages-quiz/page006';
import QuizPage007 from '../quiz/pages-quiz/page007';
import QuizPage008 from '../quiz/pages-quiz/page008';
import { quizChangeBackVisible, quizChangeChildren, quizChangePage } from '../../../../store/quiz/actions';
import QuizPage001 from '../quiz/pages-quiz/page001';

const setBackButtonVisible = (value: boolean): void => {
  store.dispatch(quizChangeBackVisible(value));
};
// const setForwardButtonVisible = (value: boolean): void => {
//   store.dispatch(quizChangeForwardVisible(value));
// };
// const setSendButtonVisible = (value: boolean): void => {
//   store.dispatch(quizChangeSendVisible(value));
// };
const sendPageLayout = (layout: JSX.Element): void => {
  store.dispatch(quizChangeChildren(layout));
};
const quizForwardPage = (): void => {
  const { currentPage } = store.getState().quiz;
  const { fences } = store.getState().building;
  let newPage = 0;
  switch (currentPage) {
    case 1:
      setBackButtonVisible(true);
      switch (fences) {
        case 1:
          newPage = 2;
          sendPageLayout(<QuizPage002 />);
          break;
        case 2:
          newPage = 4;
          sendPageLayout(<QuizPage004 />);
          break;
        case 3:
          newPage = 3;
          sendPageLayout(<QuizPage003 />);
          break;
        default:
          break;
      }
      break;
    case 2:
    case 3:
      newPage = 4;
      sendPageLayout(<QuizPage004 />);
      break;
    case 4:
      newPage = 5;
      sendPageLayout(<QuizPage005 />);
      break;
    case 5:
      newPage = 6;
      sendPageLayout(<QuizPage006 />);
      break;
    case 6:
      newPage = 7;
      sendPageLayout(<QuizPage007 />);
      break;
    case 7:
      newPage = 8;
      sendPageLayout(<QuizPage008 />);
      break;
    default:
      break;
  }
  store.dispatch(quizChangePage(newPage));
};
const quizBackwardPage = (): void => {
  const { currentPage } = store.getState().quiz;
  const { fences } = store.getState().building;
  let newPage = 0;
  switch (currentPage) {
    case 2:
    case 3:
      newPage = 1;
      setBackButtonVisible(false);
      sendPageLayout(<QuizPage001 />);
      break;
    case 4:
      switch (fences) {
        case 1:
          newPage = 2;
          sendPageLayout(<QuizPage002 />);
          break;
        case 2:
          newPage = 1;
          setBackButtonVisible(true);
          sendPageLayout(<QuizPage001 />);
          break;
        case 3:
          newPage = 3;
          sendPageLayout(<QuizPage003 />);
          break;
        default:
          break;
      }
      break;
    case 5:
      newPage = 4;
      sendPageLayout(<QuizPage004 />);
      break;
    case 6:
      newPage = 5;
      sendPageLayout(<QuizPage005 />);
      break;
    case 7:
      newPage = 6;
      sendPageLayout(<QuizPage006 />);
      break;
    case 8:
      newPage = 7;
      sendPageLayout(<QuizPage007 />);
      break;
    default:
      break;
  }
  store.dispatch(quizChangePage(newPage));
};
const quizSendPoll = (): void => {};

const PollFooter = (): JSX.Element => (
  <div className={styles.footer}>
    <ButtonBackward handlerClick={quizBackwardPage} />
    <ButtonForward handlerClick={quizForwardPage} />
    <ButtonSend handlerClick={quizSendPoll} />
  </div>
);

export default PollFooter;
