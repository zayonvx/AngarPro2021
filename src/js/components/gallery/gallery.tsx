import React from 'react';
import { connect } from 'react-redux';
import styles from './gallery.module.scss';
import PaginationChevron from '../pagination-chevron/pagination-chevron';
import store from '../../../store/store';
import { changeCurrentPhoto, toggleGalleryImageLoaded } from '../../../store/gallery/actions';
import Footer from './footer/footer';
import ObjectMap from './object-map/object-map';
import ModalHeader from '../modal-header/modal-header';
import { togglePopupVisible } from '../../../store/popup/actions';
import { IGalleryState } from '../../../store/gallery/types';
import Image from './image';

interface Props {
  visibleMap: boolean;
  photoIndex: number;
}
// TODO add swipes for slider
// TODO add animations to gallery
// TODO add descriptions to photos
const Gallery = ({ ...props }: Props): JSX.Element => {
  const { project } = store.getState().gallery;
  const { photoIndex } = props;
  const { visibleMap } = props;

  const handlerClickPrev = () => {
    store.dispatch(toggleGalleryImageLoaded(false));
    const newPhotoIndex = photoIndex === 0 ? project.photos.length - 1 : photoIndex - 1;
    store.dispatch(changeCurrentPhoto(newPhotoIndex));
  };
  const handlerClickNext = () => {
    store.dispatch(toggleGalleryImageLoaded(false));
    store.dispatch(changeCurrentPhoto(photoIndex === project.photos.length - 1 ? 0 : photoIndex + 1));
  };
  const handlerClose = () => {
    store.dispatch(changeCurrentPhoto(0));
    store.dispatch(togglePopupVisible(false));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <Image />
        </div>
        <PaginationChevron
          handlerClickNext={handlerClickNext}
          handlerClickPrev={handlerClickPrev}
          textPrev="назад"
          textNext="вперед"
        />
        <ModalHeader header={project.name} buttonMapVisible zedIndex={300} handlerClose={handlerClose} />
        <Footer />
        <ObjectMap visible={visibleMap} />
      </div>
    </>
  );
};

const mapState = (state: IGalleryState) => ({
  visibleMap: state.gallery.mapVisible,
  photoIndex: state.gallery.photoIndex,
  project: state.gallery.project,
});

export default connect(mapState)(Gallery);
