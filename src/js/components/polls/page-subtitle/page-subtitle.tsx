import React from 'react';
import styles from './page-subtitle.module.scss';

interface Props {
  text: string;
}

const PageSubtitle = ({ ...props }: Props): JSX.Element => {
  const { text } = props;
  return <h3 className={styles.text}>{text}</h3>;
};

export default PageSubtitle;
