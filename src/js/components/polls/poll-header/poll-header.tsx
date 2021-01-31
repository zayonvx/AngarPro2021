import React from 'react';
import styles from './poll-header.module.scss';

interface Props {
  text: string;
  handlerClose: () => void;
}

const PollHeader = ({ ...props }: Props): JSX.Element => {
  const { text } = props;
  const { handlerClose } = props;
  return (
    <div className={styles.header}>
      <span className={styles.text}>{text}</span>
      <button className={styles.button} type="button" onClick={handlerClose}>
        <i className="fal fa-times" />
      </button>
    </div>
  );
};

export default PollHeader;
