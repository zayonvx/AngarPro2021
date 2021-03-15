import React from 'react';
import styles from './advantages.module.scss';
import ADVANTAGES from '../../database/advantages';

// TODO write descriptions of points of advantages
const Advantages = (): JSX.Element => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      {ADVANTAGES.map((it) => (
        <div className={styles.avantage} key={it.id}>
          <div className={styles.btn_wrapper}>
            <button className={styles.button} type="button">
              <span className={it.icon} />
            </button>
          </div>
          <h4 className={styles.header}>
            <a href={it.link} className={styles.link}>
              {it.header}
            </a>
          </h4>
          <p className={styles.text}>{it.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Advantages;
