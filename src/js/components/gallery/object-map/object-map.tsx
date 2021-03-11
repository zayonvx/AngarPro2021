import React from 'react';
import styles from './object-map.module.scss';
import GalleryLeaflet from './leaflet/map';
import ModalHeader from '../../modal-header/modal-header';
import store from '../../../../store/store';
import { toggleGalleryMapVisible } from '../../../../store/gallery/actions';

interface Props {
  visible: boolean;
}

const ObjectMap = ({ ...props }: Props): JSX.Element => {
  const { visible } = props;
  if (!visible) {
    return null;
  }
  const { project } = store.getState().gallery;

  const handlerCloseMap = () => {
    store.dispatch(toggleGalleryMapVisible(!visible));
  };

  return (
    <div className={styles.wrapper}>
      <GalleryLeaflet project={project} />
      <ModalHeader header={project.name} buttonMapVisible={false} zedIndex={400} handlerClose={handlerCloseMap} />
    </div>
  );
};

export default ObjectMap;
