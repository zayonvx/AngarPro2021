import React, { FunctionComponent } from 'react';
import styles from './main.module.scss';
import SectionHero from '../section-hero/section-hero';
import SectionContent from '../section-content/section-content';

const Main: FunctionComponent = () => (
  <main className={styles.main} id="main">
    <SectionHero />
    <SectionContent />
  </main>
);

export default Main;
