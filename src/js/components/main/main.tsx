import React, { useEffect } from 'react';
import styles from './main.module.scss';
import SectionHero from '../section-hero/section-hero';
import SectionContent from '../section-content/section-content';
import LatestProgects from '../latest-projects/latest-progects';
import { windowResize } from '../../utils/functions';

const Main = (): JSX.Element => {
  const handlerWindowResize = () => {
    windowResize();
  };
  useEffect(() => {
    window.addEventListener('resize', handlerWindowResize);
    return () => {
      window.removeEventListener('resize', handlerWindowResize);
    };
  });
  return (
    <main className={styles.main} id="main">
      <h1 className="visHidden">Строительство каркасных зданий из сендвич-панелей, профнастила и тента</h1>
      <SectionHero />
      <SectionContent />
      <LatestProgects />
    </main>
  );
};

export default Main;
