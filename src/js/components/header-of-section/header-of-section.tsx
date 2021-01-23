import React from 'react';
import styles from './header-of-section.module.scss';
import Divider from '../divider/divider';

interface Props {
  header: string;
  text: string;
}

const HeaderOfSection = ({ ...props }: Props): JSX.Element => {
  const { header } = props;
  const { text } = props;
  return (
    <div className={styles.header_container}>
      <h3 className={styles.header}>{header}</h3>
      <Divider />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default HeaderOfSection;
