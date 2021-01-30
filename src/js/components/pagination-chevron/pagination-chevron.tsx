import React from 'react';
import styles from './pagination-chevron.module.scss';

interface Props {
  handlerClickPrev: () => void;
  handlerClickNext: () => void;
}

const PaginationChevron = ({ ...props }: Props): JSX.Element => {
  const { handlerClickPrev } = props;
  const { handlerClickNext } = props;

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.nav} ${styles.prev}`} type="button" onClick={handlerClickPrev}>
        <span className="far fa-chevron-left" />
        <div className={`${styles.text} ${styles.text_left}`}>назад</div>
      </button>
      <button className={`${styles.nav} ${styles.next}`} type="button" onClick={handlerClickNext}>
        <span className="far fa-chevron-right" />
        <div className={`${styles.text} ${styles.text_right}`}>далее</div>
      </button>
    </div>
  );
};

export default PaginationChevron;
