import React from 'react';
import styles from './building-description.module.scss';
import Building from '../../../../../features/calculator/classes/building/building';

const BuildingDescription = (): JSX.Element => {
  const building = new Building();
  const descriptionSizes = `Здание ${building.datas.width} x ${building.datas.length} x ${building.datas.height}м.`;
  const descriptionArchType = `${building.datas.archTypeName}.`;
  const descriptionFences = `Ограждения: ${building.datas.fencesDescription}.`;
  const descriptionRegion = `Регион: ${building.datas.regionName}.`;
  const descriptionArea = `Площадь здания: ${building.buildingArea.toLocaleString(undefined)}кв.м.`;
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>{`${descriptionSizes} ${descriptionArchType}`}</h1>
      <p className={styles.text}>{descriptionRegion}</p>
      <p className={styles.text}>{descriptionFences}</p>
      <p className={styles.text}>{descriptionArea}</p>
    </div>
  );
};

export default BuildingDescription;
