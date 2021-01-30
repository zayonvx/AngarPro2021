import React from 'react';
import styles from './slide.module.scss';

const ButtonQuiz = (): JSX.Element => {
  const handlerOnClick = () => null;

  return (
    <button className={`${styles.buttonQuiz} button button--transparent`} type="button" onClick={handlerOnClick}>
      <span className="button__text">запрос</span>
      <i className="far fa-arrow-right button__icon" />
    </button>
  );
};

export default ButtonQuiz;
