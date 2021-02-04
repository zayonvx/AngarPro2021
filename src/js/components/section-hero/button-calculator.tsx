import React from 'react';
import styles from './slide.module.scss';
import calculatorOpen from '../polls/calculator/_handlers';

const ButtonCalculator = (): JSX.Element => (
  <button
    className={`${styles.buttonCalculator} button button__accent button__accent--light`}
    type="button"
    onClick={calculatorOpen}
  >
    <span className="button__text">калькулятор</span>
    <i className="far fa-arrow-right button__icon" />
  </button>
);

export default ButtonCalculator;
