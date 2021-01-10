import React from 'react';
import styles from './slides.module.scss';

export const ButtonQuiz = (): JSX.Element => {
  const handlerOnClick = () => {
    return null;
  };

  return (
    <button className={styles.buttonQuiz + ' button button--transparent'} onClick={handlerOnClick}>
      <span className="button__text">запрос</span>
      <i className={'far fa-arrow-right button__icon'} />
    </button>
  );
};
