import React from 'react';
import styles from './odometers.module.scss';
import odometers from '../../database/odometers';
// TODO create animations of odometers
const Odometers = (): JSX.Element => (
  <section className={styles.wrapper}>
    <div className={styles.bg_overlay} />
    <ul className={styles.list}>
      {odometers.map((it) => (
        <li className={styles.listItem} key={it.id}>
          <div className={styles.icon}>
            <span className={it.icon} />
          </div>
          <span className={styles.digit}>{it.digit}</span>
          <span className={styles.text}>{it.text}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Odometers;
