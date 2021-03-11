import React from 'react';
import styles from './footer.module.scss';
import { setTrailingZeros } from '../../../utils/functions';
import store from '../../../../store/store';

const Footer = (): JSX.Element => {
  const { project } = store.getState().gallery;
  const { photoIndex } = store.getState().gallery;
  const number = `${setTrailingZeros(photoIndex + 1, 2)} / ${setTrailingZeros(project.photos.length, 2)}`;

  return (
    <div className={styles.footer}>
      <span className={styles.description}>{project.description}</span>
      <span className={styles.number}>{number}</span>
    </div>
  );
};

export default Footer;
