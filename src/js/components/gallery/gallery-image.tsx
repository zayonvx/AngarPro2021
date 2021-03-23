import React from 'react';
import styles from './gallery.module.scss';
import { setTrailingZeros } from '../../utils/functions';

interface Props {
  projectNumber: number;
  imageNumber: number;
}

const GalleryImage = ({ ...props }: Props): JSX.Element => {
  const { projectNumber } = props;
  const { imageNumber } = props;
  const projectNameNumber = setTrailingZeros(projectNumber, 3);
  const imageNameNumber = setTrailingZeros(imageNumber, 3);

  const fileNamePrefix = `/img/photos/gallery/${projectNameNumber}__${imageNameNumber}-photo-`;

  return (
    <picture className="swiper-lazy">
      <source type="image/webp" data-srcset={`${fileNamePrefix}1x.webp, ${fileNamePrefix}2x.webp 2x`} />
      <img
        className={`${styles.image} swiper-lazy`}
        data-src={`${fileNamePrefix}1x.jpg`}
        data-srcset={`${fileNamePrefix}2x.jpg 2x`}
        alt="Фото ангара"
      />
    </picture>
  );
};

export default GalleryImage;
