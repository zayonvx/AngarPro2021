import React, { useEffect, useRef } from 'react';
import store from '../../../store/store';
import { toggleGalleryImageLoaded } from '../../../store/gallery/actions';
import styles from './gallery.module.scss';
import { setTrailingZeros } from '../../utils/functions';

const Image = (): JSX.Element => {
  const { project } = store.getState().gallery;
  const { photoIndex } = store.getState().gallery;
  const projectNameNumber = setTrailingZeros(project.id, 3);
  const imageNameNumber = setTrailingZeros(project.photos[photoIndex], 3);
  const image: React.Ref<HTMLImageElement> = useRef(null);

  const fileNamePrefix = `/img/photos/gallery/${projectNameNumber}__${imageNameNumber}-photo-`;
  const handlerImageLoad = () => {
    store.dispatch(toggleGalleryImageLoaded(true));
  };

  useEffect(() => {
    image.current.src = `${fileNamePrefix}1x.jpg, ${fileNamePrefix}2x.jpg 2x`;
  });

  return (
    <picture style={{ display: 'flex' }}>
      <source type="image/webp" srcSet={`${fileNamePrefix}1x.webp, ${fileNamePrefix}2x.webp 2x`} />
      <img src="" className={styles.image} onLoad={handlerImageLoad} alt="Фото ангара" ref={image} />
    </picture>
  );
};

export default Image;
