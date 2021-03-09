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
  const photoCortage = project.photos;
  store.dispatch(changeGalleryCoordinates(project.coordinates));

  const handlerClickPrev = () => {
    store.dispatch(toggleGalleryImageLoaded(false));
    store.dispatch(changeCurrentPhoto(currentPhoto === 0 ? project.photos.length - 1 : currentPhoto - 1));
  };
  const handlerClickNext = () => {
    store.dispatch(toggleGalleryImageLoaded(false));
    store.dispatch(changeCurrentPhoto(currentPhoto === project.photos.length - 1 ? 0 : currentPhoto + 1));
  };
  const handlerClose = () => {
    store.dispatch(changeCurrentPhoto(0));
    store.dispatch(togglePopupVisible(false));
  };

  const currentPhotoString = setTrailingZeros(photoCortage[currentPhoto], 3);
  console.log(currentPhotoString);

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <Loading loaded={loaded} />
          <Image projectId={projectID} currentPhoto={currentPhotoString} />
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
          galleryCurrentPhoto={currentPhotoString}
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
