import React from 'react';
import { connect } from 'react-redux';
import styles from './gallery.module.scss';
import store from '../../../store/store';
import ObjectMap from './object-map/object-map';
import ModalHeader from '../modal-header/modal-header';
import { IGalleryState } from '../../../store/gallery/types';
import { IProject } from '../../database/gallery-base';
import { toggleBodyNoScroll } from '../../utils/functions';
import { galleryVisibleToggle } from '../../../store/gallery/actions';
import GallerySwiper from './gallery-swiper';

interface Props {
  visible: boolean;
  project: IProject;
  mapVisible: boolean;
}

const Gallery = ({ ...props }: Props): JSX.Element => {
  const { project, mapVisible, visible } = props;

  if (!visible) {
    return null;
  }

  const handlerClose = () => {
    store.dispatch(galleryVisibleToggle(false));
    toggleBodyNoScroll(false);
  };

  toggleBodyNoScroll(true);

  return (
    <div className={styles.popup}>
      <div className={styles.wrapper}>
        <GallerySwiper project={project} />
        <ModalHeader header={project.name} buttonMapVisible zedIndex={300} handlerClose={handlerClose} />
        {mapVisible ? <ObjectMap project={project} /> : null}
      </div>
    </div>
  );
};

const mapState = (state: IGalleryState) => ({
  mapVisible: state.gallery.mapVisible,
  project: state.gallery.project,
  visible: state.gallery.visible,
});

export default connect(mapState)(Gallery);
