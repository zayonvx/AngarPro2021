import React, { useEffect } from 'react';
import styles from './odometers.module.scss';
import odometers from '../../database/odometers';
import OdometerElement from './odometer';
import { isOnVisibleSpace } from '../../utils/functions';

const Odometers = (): JSX.Element => {
  useEffect(() => {
    const backgroundElement = document.getElementById('odometersContainer');
    window.addEventListener('scroll', () => {
      if (isOnVisibleSpace(backgroundElement)) {
        const elementTop = Math.round(backgroundElement.getBoundingClientRect().top);
        const bodyHeight = window.innerHeight;
        const position = (elementTop / bodyHeight) * 25;
        backgroundElement.style.backgroundPositionY = `${position}%`;
      }
    });
  });

  return (
    <section className={styles.wrapper} id="odometersContainer">
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
};

export default Odometers;
