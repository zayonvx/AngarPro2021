import React from 'react';
import { connect } from 'react-redux';
import { projects } from '../../database/gallery-base';
import styles from './gallery.module.scss';
import PaginationChevron from '../pagination-chevron/pagination-chevron';
import { setTrailingZeros } from '../../utils/functions';
import store from '../../../store/store';
import { changeCurrentPhoto, changeGalleryCoordinates, toggleGalleryImageLoaded } from '../../../store/gallery/actions';
import Footer from './footer/footer';
import ObjectMap from './object-map/object-map';
import ModalHeader from '../modal-header/modal-header';
import { togglePopupVisible } from '../../../store/popup/actions';
import { IGalleryState } from '../../../store/gallery/types';
import Loading from '../loading/loading';
import Image from './image';

interface Props {
  projectID: string;
  visibleMap: boolean;
  loaded: boolean;
}
// TODO add swipes for slider
// TODO add animations to gallery
// TODO add descriptions to photos
const Gallery = ({ ...props }: Props): JSX.Element => {
  const { projectID } = props;
  const { currentPhoto } = store.getState().gallery;
  const { visibleMap } = props;
  const { loaded } = props;
  const project = projects.find((it) => it.id === projectID);
  store.dispatch(changeGalleryCoordinates(project.coordinates));

  const handlerClickPrev = () => {
    const imageNum = Number(currentPhoto);
    store.dispatch(toggleGalleryImageLoaded(false));
    const newImage =
      imageNum === 1 ? setTrailingZeros(project.photos.length, 3) : setTrailingZeros(Number(currentPhoto) - 1, 3);
    store.dispatch(changeCurrentPhoto(newImage));
  };
  const handlerClickNext = () => {
    const imageNum = Number(currentPhoto);
    store.dispatch(toggleGalleryImageLoaded(false));
    const newImage = imageNum === project.photos.length ? '001' : setTrailingZeros(Number(currentPhoto) + 1, 3);
    store.dispatch(changeCurrentPhoto(newImage));
  };
  const handlerClose = () => {
    store.dispatch(changeCurrentPhoto('001'));
    store.dispatch(togglePopupVisible(false));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <Loading loaded={loaded} />
          <Image projectId={projectID} currentPhoto={currentPhoto} />
        </div>
        <PaginationChevron
          handlerClickNext={handlerClickNext}
          handlerClickPrev={handlerClickPrev}
          textPrev="назад"
          textNext="вперед"
        />
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
  visibleMap: state.gallery.mapVisible,
  loaded: state.gallery.loaded,
});

export default connect(mapState)(Gallery);
