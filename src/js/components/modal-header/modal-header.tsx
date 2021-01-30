import React from 'react';
import styles from './modal-header.module.scss';
import store from '../../../store/store';
import { toggleGalleryMapVisible } from '../../../store/gallery/actions';

interface Props {
  header: string;
  buttonMapVisible: boolean;
  zedIndex: number;
  handlerClose: () => void;
}

const ModalHeader = ({ ...props }: Props): JSX.Element => {
  const { header } = props;
  const { buttonMapVisible } = props;
  const { zedIndex } = props;
  const { handlerClose } = props;
  const handlerMapClick = () => {
    store.dispatch(toggleGalleryMapVisible(true));
  };

  const getButtonMap = () => {
    if (buttonMapVisible) {
      return (
        <button className={styles.button} type="button" onClick={handlerMapClick}>
          <i className="fal fa-map-marker-alt" />
        </button>
      );
    }
    return <span />;
  };

  return (
    <div className={styles.header} style={{ zIndex: zedIndex }}>
      {getButtonMap()}
      <span className={styles.name}>{header}</span>
      <button className={styles.button} type="button" onClick={handlerClose}>
        <i className="fal fa-times" />
      </button>
    </div>
  );
};

export default ModalHeader;
