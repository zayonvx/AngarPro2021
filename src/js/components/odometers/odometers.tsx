import React from 'react';
import styles from './odometers.module.scss';
import odometers from '../../database/odometers';
import OdometerElement from './odometer';

const Odometers = (): JSX.Element => (
  <section className={styles.wrapper}>
    <div className={styles.bg_overlay} />
    <ul className={styles.list}>
      {odometers.map((it) => (
        <li className={styles.listItem} key={it.id}>
          <div className={styles.icon}>
            <span className={it.icon} />
          </div>
          <div id={it.id}>
            <OdometerElement valueEnd={it.digit} id={it.id} />
          </div>
          <span className={styles.text}>{it.text}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Odometers;
