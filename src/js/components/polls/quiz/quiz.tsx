import React from 'react';
import { connect } from 'react-redux';
import styles from './quiz.module.scss';
import { IInitialState } from '../../../../store/initial-state';
import PollHeader from '../poll-header/poll-header';
import PollFooter from '../poll-footer/poll-footer';
import store from '../../../../store/store';
import { togglePopupVisible } from '../../../../store/popup/actions';

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
      <PollHeader text="Узнайте цену за 6 шагов" handlerClose={handlerOnClickQuizClose} />
      {children}
      <PollFooter />
    </div>
  );
};

const mapState = (state: IInitialState) => ({
  children: state.quiz.children,
});

export default connect(mapState)(Quiz);
