import React from 'react';
import styles from './latest-progects.module.scss';
import HeaderOfSection from '../header-of-section/header-of-section';
import PreviewList from './preview-list';
import LoadMoreButton from './load-more-button';

const LatestProgects = (): JSX.Element => (
  <section id="pholio" className={styles.wrapper}>
    <HeaderOfSection
      header="Наши недавние проекты"
      text="Посмотрите на наши проекты, может быть мы уже построили необходимое вам здание или подобное ему."
      key="galleryHeader"
    />
    <PreviewList />
    <LoadMoreButton />
  </section>
);

export default LatestProgects;
