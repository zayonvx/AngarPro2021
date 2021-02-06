import React from 'react';
import { connect } from 'react-redux';
import { projects } from '../../database/gallery-base';
import styles from './gallery.module.scss';
import PaginationChevron from '../pagination-chevron/pagination-chevron';
import { setTrailingZeros } from '../../utils/functions';
import store from '../../../store/store';
import { changeCurrentPhoto, changeGalleryCoordinates } from '../../../store/gallery/actions';
import Footer from './footer/footer';
import ObjectMap from './object-map/object-map';
import ModalHeader from '../modal-header/modal-header';
import { togglePopupVisible } from '../../../store/popup/actions';
import { IGalleryState } from '../../../store/gallery/types';

interface Props {
  projectID: string;
  currentPhoto: string;
  visibleMap: boolean;
}
// TODO add swipes for slider
// TODO add animations to gallery
// TODO add descriptions to photos
// TODO add tag <picture>
// TODO add loaders for images
const Gallery = ({ ...props }: Props): JSX.Element => {
  const { projectID } = props;
  const { currentPhoto } = props;
  const { visibleMap } = props;
  const project = projects.find((it) => it.id === projectID);
  store.dispatch(changeGalleryCoordinates(project.coordinates));

  const handlerClickPrev = () => {
    const imageNum = Number(currentPhoto);
    const newImage =
      imageNum === 1 ? setTrailingZeros(project.photos.length, 3) : setTrailingZeros(Number(currentPhoto) - 1, 3);
    store.dispatch(changeCurrentPhoto(newImage));
  };
  const handlerClickNext = () => {
    const imageNum = Number(currentPhoto);
    const newImage = imageNum === project.photos.length ? '001' : setTrailingZeros(Number(currentPhoto) + 1, 3);
    store.dispatch(changeCurrentPhoto(newImage));
  };

  const handlerClose = () => {
    store.dispatch(changeCurrentPhoto('001'));
    store.dispatch(togglePopupVisible(false));
  };

  const getImagePath = `/img/photos/gallery/${project.id}__${currentPhoto}-photo-1x.jpg`;

  return (
    <>
      <div className={styles.wrapper}>
        <img src={getImagePath} className={styles.image} alt="Фото ангара" />
        <PaginationChevron handlerClickNext={handlerClickNext} handlerClickPrev={handlerClickPrev} />
        <ModalHeader header={project.name} buttonMapVisible zedIndex={300} handlerClose={handlerClose} />
        <Footer
          projecDescription={project.description}
          projectTotalPhotos={project.photos.length}
          galleryCurrentPhoto={currentPhoto}
        />
        <ObjectMap visible={visibleMap} projectId={projectID} projectName={project.name} />
      </div>
    </>
  );
};

const mapState = (state: IGalleryState) => ({
  currentPhoto: state.gallery.currentPhoto,
  visibleMap: state.gallery.mapVisible,
});

export default connect(mapState)(Gallery);
