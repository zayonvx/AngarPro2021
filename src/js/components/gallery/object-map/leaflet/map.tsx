import React from 'react';
import { LatLngExpression } from 'leaflet';

import { Container, Popup, Marker, Layer } from '../../../../utils/leaflet-ssr';
import { setTrailingZeros } from '../../../../utils/functions';
import { IProject } from '../../../../database/gallery-base';
import styles from './map.module.scss';

interface Props {
  project: IProject;
}

const GalleryLeaflet = ({ ...props }: Props): JSX.Element => {
  const { project } = props;

  const zoom = 13;
  const coordinates: LatLngExpression = [project.coordinates[0], project.coordinates[1]];
  const path = `https://angarpro.com/img/photos/gallery/preview/preview_${setTrailingZeros(project.id, 3)}.jpg`;

  return (
    <Container center={coordinates} zoom={zoom} zoomControl={false} style={{ width: '100%', height: '100%' }}>
      <Layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coordinates}>
        <Popup>
          <div className={styles.wrapper}>
            <img src={path} className={styles.image} alt="Превью объекта" />
          </div>
        </Popup>
      </Marker>
    </Container>
  );
};

export default GalleryLeaflet;
