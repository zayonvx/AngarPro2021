import React from 'react';
import styles from './news.module.scss';
import HeaderOfSection from '../header-of-section/header-of-section';
import NewsSwiper from './news-swiper';

const News = (): JSX.Element => (
  <div className={styles.section} id="news">
    <HeaderOfSection header="Наши новости" text="Отчеты о проделанной работе" />
    <div className={styles.ribbon}>
      <NewsSwiper />
    </div>
  </div>
);

export default News;
