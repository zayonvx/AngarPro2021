import React from 'react';
import styles from './latest-projects.module.scss';
import HeaderOfSection from '../header-of-section/header-of-section';
import PreviewList from './preview-list';
import LoadMoreButton from './load-more-button';
// TODO add a popup of all objects on the map
const LatestProjects = (): JSX.Element => (
  <section id="pholio" className={styles.wrapper}>
    <HeaderOfSection
      header="Наши недавние проекты"
      text="Посмотрите на наши проекты, может быть мы уже построили здание подобное тому, что вы ищете."
      key="galleryHeader"
    />
    <PreviewList />
    <LoadMoreButton />
  </section>
);

export default LatestProjects;
