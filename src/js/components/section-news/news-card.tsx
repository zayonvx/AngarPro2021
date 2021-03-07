import React from 'react';
import styles from './news-card.module.scss';

interface Props {
  imagePath: string;
  date: string;
  header: string;
  text: string;
}

const NewsCard = ({ ...props }: Props): JSX.Element => {
  const { imagePath, date, header, text } = props;
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imagePath} alt="Alt" />
      <div className={styles.container}>
        <h4 className={styles.header}>{header}</h4>
        <p className={styles.text}>{text}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
