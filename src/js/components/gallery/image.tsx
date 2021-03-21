import React from 'react';
import styles from './gallery.module.scss';
import { setTrailingZeros } from '../../utils/functions';

interface Props {
  projectNumber: number;
  imageNumber: number;
}

const Image = ({ ...props }: Props): JSX.Element => {
  const { projectNumber } = props;
  const { imageNumber } = props;
  const projectNameNumber = setTrailingZeros(projectNumber, 3);
  const imageNameNumber = setTrailingZeros(imageNumber, 3);

  const fileNamePrefix = `/img/photos/gallery/${projectNameNumber}__${imageNameNumber}-photo-`;

  return (
    <picture>
      <source type="image/webp" srcSet={`${fileNamePrefix}1x.webp, ${fileNamePrefix}2x.webp 2x`} />
      <img src={`${fileNamePrefix}1x.jpg, ${fileNamePrefix}2x.jpg 2x`} className={styles.image} alt="Фото ангара" />
    </picture>
  );
};

export default Image;
