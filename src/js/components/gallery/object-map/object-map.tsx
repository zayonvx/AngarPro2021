import React from 'react';
import styles from './object-map.module.scss';
import GalleryLeaflet from './leaflet/map';
import ModalHeader from '../../modal-header/modal-header';
import store from '../../../../store/store';
import { toggleGalleryMapVisible } from '../../../../store/gallery/actions';
import { IProject } from '../../../database/gallery-base';

interface Props {
  project: IProject;
}

const ObjectMap = ({ ...props }: Props): JSX.Element => {
  const { project } = props;

  const handlerCloseMap = () => {
    store.dispatch(toggleGalleryMapVisible(false));
  };

  return (
    <div className={styles.wrapper}>
      <GalleryLeaflet project={project} />
      <ModalHeader header={project.name} buttonMapVisible={false} zedIndex={400} handlerClose={handlerCloseMap} />
    </div>
  );
};

export default ObjectMap;
