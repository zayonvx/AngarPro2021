import React, { useRef } from 'react';
import styles from './poll-form-sended.module.scss';
import store from '../../../../store/store';
import { togglePopupVisible } from '../../../../store/popup/actions';

const PollFormSended = (): JSX.Element => {
  const counter = 3000;
  const buttonEl = useRef(null);

  const closePopup = () => {
    store.dispatch(togglePopupVisible(false));
  };

  setTimeout(() => {
    closePopup();
  }, counter);

  return (
    <div className={styles.wrapper}>
      <button className="button button__accent button__accent--light" type="button" onClick={closePopup} ref={buttonEl}>
        запрос отправлен
      </button>
    </div>
  );
};

export default PollFormSended;
