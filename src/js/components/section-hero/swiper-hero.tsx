import SwiperCore, { Navigation, Lazy, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { slidesHero } from '../../database/slides-hero';
import Slides from './slide';
import NavigationPrev from './navigation-prev';
import NavigationNext from './navigation-next';
import Preloder from '../preloder/preloader';

SwiperCore.use([Navigation, Lazy, Autoplay]);

const handlerSlideChange = (swiper: SwiperCore) => {
  const texts = Array.from(document.getElementsByClassName('texts--animated'));
  texts.forEach((it, index) => {
    if (index === swiper.activeIndex) {
      it.children.item(0).classList.replace('with_animation', 'fadeInUp');
      it.children.item(1).classList.replace('with_animation', 'fadeInUp');
    } else {
      it.children.item(0).classList.replace('fadeInUp', 'with_animation');
      it.children.item(1).classList.replace('fadeInUp', 'with_animation');
    }
  });

  const buttons = Array.from(document.getElementsByClassName('buttons--animated'));
  buttons.forEach((it, index) => {
    if (index === swiper.activeIndex) {
      it.classList.replace('with_animation', 'fadeIn');
    } else {
      it.classList.replace('fadeIn', 'with_animation');
    }
  });
};

const SwiperHero = (): JSX.Element => (
  <Swiper
    tag="div"
    wrapperTag="ul"
    navigation={{
      prevEl: '.button__prev',
      nextEl: '.button__next',
      disabledClass: 'visHidden',
    }}
    onSlideChange={handlerSlideChange}
    preloadImages={false}
    lazy={{ loadPrevNext: true }}
    grabCursor
    autoplay={{ delay: 10000 }}
    speed={1000}
  >
    {slidesHero.map((it) => (
      <SwiperSlide tag="li" key={it.id}>
        <Slides
          fileNamePrefix={it.fileNamePrefix}
          masterText={it.textMaster}
          slaveTextTop={it.textSlave.top}
          slaveTextBottom={it.textSlave.bottom}
          id={it.id}
          anim={it.anim}
          alt={it.alt}
        />
        <div className="swiper-lazy-preloader" style={{ color: '#FFFFFF' }}>
          <Preloder />
        </div>
      </SwiperSlide>
    ))}

    <NavigationPrev />
    <NavigationNext />
  </Swiper>
);

export default SwiperHero;
