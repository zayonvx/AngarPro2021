import React from 'react';
import styles from './preloader.module.scss';

const Preloder = (): JSX.Element => (
  <div className={`${styles.loading}`}>
    <span className="fas fa-spinner fa-spin" />
  </div>
);

export default Preloder;
