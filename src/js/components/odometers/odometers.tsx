import React, { useEffect } from 'react';
import styles from './odometers.module.scss';
import odometers from '../../database/odometers';

const isOnVisibleSpace = (element: Element): boolean => {
  const bodyHeight = window.innerHeight;
  const elemRect = element.getBoundingClientRect();
  const offset = elemRect.top; // - bodyRect.top;
  if (offset < 0) return false;
  return offset <= bodyHeight;
};

const Odometers = (): JSX.Element => {
  useEffect(() => {
    const odometerElements = document.querySelectorAll('.odometer') as NodeList;

    window.addEventListener('scroll', () => {
      odometerElements.forEach((it) => {
        const element = it as Element;
        const visible = isOnVisibleSpace(element);
        if (visible) {
          element.innerHTML = element.id;
        }
      });
    });
  });
  return (
    <section className={styles.wrapper}>
      <div className={styles.bg_overlay} />
      <ul className={styles.list}>
        {odometers.map((it) => (
          <li className={styles.listItem} key={it.id}>
            <div className={styles.icon}>
              <span className={it.icon} />
            </div>
            <span className={`${styles.digit} odometer`} id={it.digit}>
              {0}
            </span>
            <span className={styles.text}>{it.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Odometers;
