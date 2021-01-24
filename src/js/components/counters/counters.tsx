import React from 'react';
import styles from './counters.module.scss';

const Counters = (): JSX.Element => (
  <section className={styles.wrapper}>
    <div className={styles.bg_overlay} />
    <div className={styles.row}>
      <div className={styles.cell}>
        <div className={styles.icon}>
          <span className="fal fa-hourglass-half" />
        </div>
        <span className={styles.digit}>14</span>
        <span className={styles.text}>Лет на рынке</span>
      </div>
      <div className={styles.cell}>
        <div className={styles.icon}>
          <span className="fal fa-industry" />
        </div>
        <span className={styles.digit}>3</span>
        <span className={styles.text}>Фабрики</span>
      </div>
      <div className={styles.cell}>
        <div className={styles.icon}>
          <span className="fal fa-user-friends" />
        </div>
        <span className={styles.digit}>23</span>
        <span className={styles.text}>Сотрудника</span>
      </div>
      <div className={styles.cell}>
        <div className={styles.icon}>
          <span className="fal fa-home-lg-alt" />
        </div>
        <span className={styles.digit}>40</span>
        <span className={styles.text}>Объектов сдано</span>
      </div>
    </div>
  </section>
);

export default Counters;
