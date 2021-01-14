import React from 'react';
import styles from './loading.module.scss';

const Loading = (): JSX.Element => (
  <div className={styles.loading}>
    <i className="fas fa-spinner" />
  </div>
);

export default Loading;
