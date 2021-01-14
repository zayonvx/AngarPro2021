import React from 'react';
import styles from './slides.module.scss';

const ButtonCalculator = (): JSX.Element => {
  const handlerOnClick = () => null;

  return (
    <button className={`${styles.buttonCalculator} button button--accent`} type="button" onClick={handlerOnClick}>
      <span className="button__text">калькулятор</span>
      <i className="far fa-arrow-right button__icon" />
    </button>
  );
};

export default ButtonCalculator;
