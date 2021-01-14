import React, { FunctionComponent } from 'react';
import styles from './main.module.scss';
import SectionHero from '../section-hero/section-hero';

const Main: FunctionComponent = () => (
  <main className={styles.main} id="main">
    <SectionHero />
  </main>
);

export default Main;
