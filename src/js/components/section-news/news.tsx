import React, { useEffect, useRef, useState } from 'react';
import styles from './news.module.scss';
import NewsCard from './news-card';
import newsArray from '../../database/news';
import PaginationChevron from '../pagination-chevron/pagination-chevron';
import HeaderOfSection from '../header-of-section/header-of-section';

const News = (): JSX.Element => {
  const [leftRibbon, setLeftRibbon] = useState(0);
  const ribbonEl: React.Ref<HTMLDivElement> = useRef(null);
  const cardWidth = useRef(0);
  // let cardWidth = 0;
  const handlerClickRight = () => {
    if (leftRibbon < 0) {
      setLeftRibbon(leftRibbon + cardWidth.current);
    }
  };
  const handlerClickLeft = () => {
    const cardsWidth = cardWidth.current * newsArray.length;
    const clientWidth = window.innerWidth;
    const minLeft = 0 - cardsWidth + clientWidth;

    if (leftRibbon > minLeft) {
      setLeftRibbon(leftRibbon - cardWidth.current);
    }
  };

  const styleLeft = { left: `${String(leftRibbon)}px` };

  useEffect(() => {
    const ribbon = ribbonEl.current;
    const card = ribbon.firstChild as HTMLDivElement;
    const margin = parseFloat(window.getComputedStyle(ribbon.firstChild as Element).getPropertyValue('margin-right'));
    cardWidth.current = card.offsetWidth + margin;
  });

  return (
    <div className={styles.section}>
      <HeaderOfSection header="Наши последние новости" text="" />
      <div ref={ribbonEl} className={styles.ribbon} style={styleLeft}>
        {newsArray.map((it) => (
          <NewsCard key={it.id} imagePath={it.image} date={it.date} header={it.header} text={it.text} />
        ))}
      </div>
      <div className={styles.chevronContainer}>
        <PaginationChevron
          handlerClickPrev={handlerClickRight}
          handlerClickNext={handlerClickLeft}
          textNext="в прошлое"
          textPrev="к последним"
        />
      </div>
    </div>
  );
};

export default News;
