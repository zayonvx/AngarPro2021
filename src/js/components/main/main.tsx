import React, {FunctionComponent} from 'react';
import styles from './main.module.scss';
import {SectionHero} from "../section-hero/section-hero";

const Main:FunctionComponent = () => {
  return (
    <div className={styles.main}>
        <SectionHero/>
    </div>
  );
};

export default Main;
