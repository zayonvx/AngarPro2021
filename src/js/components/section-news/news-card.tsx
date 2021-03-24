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
      <picture className={styles.picture}>
        <source type="image/webp" srcSet={`${imagePath}1x.webp, ${imagePath}2x.webp 2x`} />
        <img className={styles.image} src={`${imagePath}1x.jpg, ${imagePath}2x.jpg 2x`} alt="Иллюстрацтя новости" />
      </picture>

      <div className={styles.container}>
        <h4 className={styles.header}>{header}</h4>
        <span className={styles.date}>
          <i className="fal fa-calendar-alt" />
          {` ${date}`}
        </span>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default NewsCard;
