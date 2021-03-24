import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import newsArray from '../../database/news';
import NewsCard from './news-card';

SwiperCore.use([Scrollbar]);

const NewsSwiper = (): JSX.Element => {
  newsArray.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if (aDate > bDate) return -1;
    return aDate < bDate ? 1 : 0;
  });

  return (
    <Swiper
      spaceBetween={20}
      freeMode
      grabCursor
      tag="section"
      wrapperTag="ul"
      slidesPerView="auto"
      scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
    >
      {newsArray.map((it) => (
        <SwiperSlide tag="li" key={it.id} className="slider-news">
          <NewsCard imagePath={it.image} date={it.dateLocal} header={it.header} text={it.text} />
        </SwiperSlide>
      ))}
      <div className="swiper-scrollbar" />
    </Swiper>
  );
};

export default NewsSwiper;
