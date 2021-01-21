import React from 'react';
import styles from './section-content.module.scss';
import Advantages from '../advantages/advantages';

const SectionContent = (): JSX.Element => (
  <div className={styles.content}>
    <Advantages />
  </div>
);

export default SectionContent;
