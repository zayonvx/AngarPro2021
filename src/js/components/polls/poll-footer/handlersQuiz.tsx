import React from 'react';
import store from '../../../../store/store';
import QuizPage002 from '../quiz/pages-quiz/page002';
import QuizPage004 from '../quiz/pages-quiz/page004';
import QuizPage003 from '../quiz/pages-quiz/page003';
import QuizPage005 from '../quiz/pages-quiz/page005';
import QuizPage006 from '../quiz/pages-quiz/page006';
import QuizPage007 from '../quiz/pages-quiz/page007';
import QuizPage008 from '../quiz/pages-quiz/page008';
import { quizChangePage } from '../../../../store/quiz/actions';
import QuizPage001 from '../quiz/pages-quiz/page001';
import { QuizIntefaces } from '../quiz/types';
import { quizPostConst } from '../quiz/_const';
import { changePopupChildren } from '../../../../store/popup/actions';
import PollFormSended from '../poll-form-sended/poll-form-sended';
import { quizUrlPHP } from '../../../utils/const';
import { sendQuizPageLayout, setBackButtonVisible, setForwardButtonVisible, setSendButtonVisible } from './_functions';

export const quizForwardPage = (): void => {
  const { currentPage } = store.getState().quiz;
  const { fences } = store.getState().building;
  let newPage = 0;
  switch (currentPage) {
    case 1:
      setBackButtonVisible(true);
      switch (fences) {
        case 1:
          newPage = 2;
          sendQuizPageLayout(<QuizPage002 />);
          break;
        case 2:
          newPage = 4;
          sendQuizPageLayout(<QuizPage004 />);
          break;
        case 3:
          newPage = 3;
          sendQuizPageLayout(<QuizPage003 />);
          break;
        default:
          break;
      }
      break;
    case 2:
    case 3:
      newPage = 4;
      sendQuizPageLayout(<QuizPage004 />);
      break;
    case 4:
      newPage = 5;
      sendQuizPageLayout(<QuizPage005 />);
      break;
    case 5:
      newPage = 6;
      sendQuizPageLayout(<QuizPage006 />);
      break;
    case 6:
      newPage = 7;
      sendQuizPageLayout(<QuizPage007 />);
      break;
    case 7:
      newPage = 8;
      setForwardButtonVisible(false);
      setSendButtonVisible(true);
      sendQuizPageLayout(<QuizPage008 />);
      break;
    default:
      break;
  }
  store.dispatch(quizChangePage(newPage));
};
export const quizBackwardPage = (): void => {
  const { currentPage } = store.getState().quiz;
  const { fences } = store.getState().building;
  let newPage = 0;
  switch (currentPage) {
    case 2:
    case 3:
      newPage = 1;
      setBackButtonVisible(false);
      sendQuizPageLayout(<QuizPage001 />);
      break;
    case 4:
      switch (fences) {
        case 1:
          newPage = 2;
          sendQuizPageLayout(<QuizPage002 />);
          break;
        case 2:
          newPage = 1;
          setBackButtonVisible(true);
          sendQuizPageLayout(<QuizPage001 />);
          break;
        case 3:
          newPage = 3;
          sendQuizPageLayout(<QuizPage003 />);
          break;
        default:
          break;
      }
      break;
    case 5:
      newPage = 4;
      sendQuizPageLayout(<QuizPage004 />);
      break;
    case 6:
      newPage = 5;
      sendQuizPageLayout(<QuizPage005 />);
      break;
    case 7:
      newPage = 6;
      sendQuizPageLayout(<QuizPage006 />);
      break;
    case 8:
      newPage = 7;
      setForwardButtonVisible(true);
      setSendButtonVisible(false);
      sendQuizPageLayout(<QuizPage007 />);
      break;
    default:
      break;
  }
  store.dispatch(quizChangePage(newPage));
};
export const quizPreparePost = (): QuizIntefaces => {
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
export const quizSend = (): void => {
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
