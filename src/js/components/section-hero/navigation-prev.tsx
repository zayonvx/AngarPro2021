import React from 'react';
import styles from './section-hero.module.scss';

const NavigationPrev = (): JSX.Element => (
  <button className={`button__prev ${styles.nav} ${styles.prev}`} type="button">
    <span className="far fa-chevron-left" />
    <div className={`${styles.text} ${styles.text_left}`}>назад</div>
  </button>
);

export default NavigationPrev;
