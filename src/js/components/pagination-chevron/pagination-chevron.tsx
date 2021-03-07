import React from 'react';
import styles from './pagination-chevron.module.scss';

interface Props {
  handlerClickPrev: () => void;
  handlerClickNext: () => void;
  textPrev: string;
  textNext: string;
}

const PaginationChevron = ({ ...props }: Props): JSX.Element => {
  const { handlerClickPrev } = props;
  const { handlerClickNext } = props;
  const { textPrev } = props;
  const { textNext } = props;

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.nav} ${styles.prev}`} type="button" onClick={handlerClickPrev}>
        <span className="far fa-chevron-left" />
        <span className={`${styles.text} ${styles.text_left}`}>{textPrev}</span>
      </button>
      <button className={`${styles.nav} ${styles.next}`} type="button" onClick={handlerClickNext}>
        <span className="far fa-chevron-right" />
        <span className={`${styles.text} ${styles.text_right}`}>{textNext}</span>
      </button>
    </div>
  );
};

export default PaginationChevron;
