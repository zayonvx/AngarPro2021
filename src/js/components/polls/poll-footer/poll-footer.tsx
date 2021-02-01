import React from 'react';
import styles from './poll-footer.module.scss';
import ButtonForward from '../poll-buttons/button-forward';
import ButtonBackward from '../poll-buttons/button-backward';
import ButtonSend from '../poll-buttons/button-send';
import store from '../../../../store/store';
import QuizPage001 from '../quiz/pages-quiz/page001';
import QuizPage002 from '../quiz/pages-quiz/page002';
import QuizPage004 from '../quiz/pages-quiz/page004';
import QuizPage003 from '../quiz/pages-quiz/page003';
import QuizPage005 from '../quiz/pages-quiz/page005';
import QuizPage006 from '../quiz/pages-quiz/page006';
import QuizPage007 from '../quiz/pages-quiz/page007';
import QuizPage008 from '../quiz/pages-quiz/page008';
import {
  quizChangeBackVisible,
  quizChangeChildren,
  quizChangeForwardVisible,
  quizChangePage,
  quizChangeSendVisible,
} from '../../../../store/quiz/actions';
import PollFormSended from '../poll-form-sended/poll-form-sended';
import { changePopupChildren } from '../../../../store/popup/actions';
import { QuizIntefaces } from '../quiz/types';
import { quizPostConst } from '../quiz/_const';
import { quizUrlPHP } from '../../../utils/const';

const setBackButtonVisible = (value: boolean): void => {
  store.dispatch(quizChangeBackVisible(value));
};
const setForwardButtonVisible = (value: boolean): void => {
  store.dispatch(quizChangeForwardVisible(value));
};
const setSendButtonVisible = (value: boolean): void => {
  store.dispatch(quizChangeSendVisible(value));
};

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
      setForwardButtonVisible(false);
      setSendButtonVisible(true);
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
      setForwardButtonVisible(true);
      setSendButtonVisible(false);
      sendPageLayout(<QuizPage007 />);
      break;
    default:
      break;
  }
  store.dispatch(quizChangePage(newPage));
};

const quizPreparePost = (): QuizIntefaces => {
  const type = quizPostConst.fences.types[store.getState().building.fences];
  const warming = quizPostConst.tent.heat[store.getState().building.tentType];
  const sandwich = quizPostConst.sandwich.types[store.getState().building.sandwichType];

  return {
    type,
    warming,
    sandwich,
    site: store.getState().building.regionStr,
    name: store.getState().quiz.name,
    email: store.getState().quiz.mail,
    phone: store.getState().quiz.tel,
    span: 'не определено',
    craneHeight: 0,
    cranePower: 0,
    width: store.getState().building.width,
    length: store.getState().building.length,
    height: store.getState().building.height,
  };
};
const quizSend = (): void => {
  setForwardButtonVisible(true);
  setSendButtonVisible(false);
  setBackButtonVisible(false);
  store.dispatch(quizChangePage(0));
  store.dispatch(changePopupChildren(<PollFormSended />));

  const datas = quizPreparePost();

  const xhr = new XMLHttpRequest();
  xhr.open('POST', quizUrlPHP, true);
  const post = JSON.stringify(datas);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(post);
};

const PollFooter = (): JSX.Element => (
  <div className={styles.footer}>
    <ButtonBackward handlerClick={quizBackwardPage} />
    <ButtonForward handlerClick={quizForwardPage} />
    <ButtonSend handlerClick={quizSend} />
  </div>
);

export default PollFooter;
