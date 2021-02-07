import React from 'react';
import styles from './poll-header.module.scss';

interface Props {
  text: string;
  handlerClose: () => void;
  iconClass: string;
}

const PollHeader = ({ ...props }: Props): JSX.Element => {
  const { text } = props;
  const { handlerClose } = props;
  const { iconClass } = props;
  return (
    <div className={styles.header}>
      <div className={styles.textWrapper}>
        <span className={iconClass} />
        <span className={styles.text}>{text}</span>
      </div>
      <button className={styles.button} type="button" onClick={handlerClose}>
        <i className="fal fa-times" />
      </button>
    </div>
  );
};

export default PollHeader;
