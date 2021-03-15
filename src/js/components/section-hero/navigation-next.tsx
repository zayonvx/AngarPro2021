import React from 'react';
import styles from './section-hero.module.scss';

const NavigationNext = (): JSX.Element => (
  <button className={`button__next ${styles.nav} ${styles.next}`} type="button">
    <span className="far fa-chevron-right" />
    <div className={`${styles.text} ${styles.text_right}`}>вперед</div>
  </button>
);

export default NavigationNext;
