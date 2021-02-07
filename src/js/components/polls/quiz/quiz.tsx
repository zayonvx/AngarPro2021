import React from 'react';
import { connect } from 'react-redux';
import styles from './quiz.module.scss';
import PollHeader from '../poll-header/poll-header';
import PollFooter from '../poll-footer/poll-footer';
import store from '../../../../store/store';
import { togglePopupVisible } from '../../../../store/popup/actions';
import { IQuizState } from '../../../../store/quiz/types';
import { quizBackwardPage, quizForwardPage, quizSend } from '../poll-footer/handlersQuiz';

// TODO add span and crane pages

interface Props {
  children: JSX.Element;
}

const Quiz = ({ ...props }: Props): JSX.Element => {
  const { children } = props;
  const handlerOnClickQuizClose = (): void => {
    store.dispatch(togglePopupVisible(false));
  };
  return (
    <div className={styles.quiz}>
      <PollHeader
        text="Получите предложение на строительство"
        handlerClose={handlerOnClickQuizClose}
        iconClass="fal fa-file-alt"
      />
      {children}
      <PollFooter
        handlerBackwardClick={quizBackwardPage}
        handlerForwardClick={quizForwardPage}
        handlerSendClick={quizSend}
      />
    </div>
  );
};

const mapState = (state: IQuizState) => ({
  children: state.quiz.children,
});

export default connect(mapState)(Quiz);
