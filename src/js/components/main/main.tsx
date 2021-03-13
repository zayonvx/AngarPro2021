import React, { useEffect } from 'react';
import styles from './main.module.scss';
import SectionHero from '../section-hero/section-hero';
import SectionContent from '../section-content/section-content';
import LatestProjects from '../latest-projects/latest-projects';
import { windowResize } from '../../utils/functions';
import Choose from '../section-choose-us/choose';
import Odometers from '../odometers/odometers';
import Contacts from '../section-contacts/contacts';
import PopupWrapper from '../popup-wrapper/popup-wrapper';
import News from '../section-news/news';

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
      <LatestProjects />
      <Choose />
      <Odometers />
      <News />
      <Contacts />
      <PopupWrapper />
    </main>
  );
};

export default Main;
