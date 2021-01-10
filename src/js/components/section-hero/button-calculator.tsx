import React from 'react';
import styles from './slides.module.scss';

export const ButtonCalculator = (): JSX.Element => {
  const handlerOnClick = () => {
    return null;
  };

  return (
    <button className={styles.buttonCalculator + ' button button--accent'} onClick={handlerOnClick}>
      <span className="button__text">калькулятор</span>
      <i className="far fa-arrow-right button__icon" />
    </button>
  );
};
