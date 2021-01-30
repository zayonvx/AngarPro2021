import React from 'react';
import styles from './footer.module.scss';
import { setTrailingZeros } from '../../../utils/functions';

interface Props {
  projecDescription: string;
  projectTotalPhotos: number;
  galleryCurrentPhoto: string;
}

const Footer = ({ ...props }: Props): JSX.Element => {
  const { projecDescription } = props;
  const { projectTotalPhotos } = props;
  const { galleryCurrentPhoto } = props;
  const number = `${setTrailingZeros(Number(galleryCurrentPhoto), 2)} / ${setTrailingZeros(projectTotalPhotos, 2)}`;

  return (
    <div className={styles.footer}>
      <span className={styles.description}>{projecDescription}</span>
      <span className={styles.number}>{number}</span>
    </div>
  );
};

export default Footer;
