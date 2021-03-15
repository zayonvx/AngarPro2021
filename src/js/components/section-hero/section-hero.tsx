import React from 'react';
import styles from './section-hero.module.scss';
import SwiperHero from './swiper-hero';

const SectionHero = (): JSX.Element => (
  <section className={styles.slider_fullwidth}>
    <SwiperHero />
  </section>
);

export default SectionHero;
