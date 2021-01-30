import React from 'react';
import { LatLngExpression } from 'leaflet';
import { Container, Popup, Marker, Layer } from '../../../../utils/leaflet-ssr';
import { setTrailingZeros } from '../../../../utils/functions';
import { projects } from '../../../../database/gallery-base';
import styles from './map.module.scss';

interface Props {
  projectId: string;
}

const GalleryLeaflet = ({ ...props }: Props): JSX.Element => {
  const { projectId } = props;
  const project = projects.find((it) => it.id === projectId);

  const zoom = 13;
  const coordinates: LatLngExpression = [project.coordinates[0], project.coordinates[1]];
  const { description } = project;
  const path = 'https://angarpro.com/img/photos/gallery/preview/__';
  const imageURL = `${path + setTrailingZeros(Number(project.id), 3)}-gallery-preview-1x.jpg`;

  return (
    <Container center={coordinates} zoom={zoom} zoomControl={false} style={{ width: '100%', height: '100%' }}>
      <Layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coordinates}>
        <Popup>
          <div className={styles.wrapper}>
            <div className={styles.header}>{description}</div>
            <img src={imageURL} className={styles.image} alt="Превью объекта" />
          </div>
        </Popup>
      </Marker>
    </Container>
  );
};

export default GalleryLeaflet;
