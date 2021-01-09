import styles from './section-hero.module.scss';
import React, { useRef, useEffect } from 'react';
import { SlideHero } from './slide-hero';

const slides = [
  {
    id: 'slide0',
    fileBG: '/img/system/HeroImages/hero_image_1.jpg',
    textMaster: 'каркасные здания из сендвич панелей',
    textSlave: {
      top: 'У нас вы можете заказать проектирование, производство и монтаж здания из сендвич панелей.',
      bottom: 'Сделаем устройство фундаментов и полов, а также подготовим площадку.',
    },
    anim: true,
  },
  {
    id: 'slide1',
    fileBG: '/img/system/HeroImages/hero_image_2.jpg',
    textMaster: 'ангары и навесы из профлиста',
    textSlave: {
      top: 'Мы производим и монтируем комплекты каркасных ангаров с ограждениями из профнастила.',
      bottom: 'Воспользуйтесь калькулятором стоимости зданий чтобы узнать цену.',
    },
    anim: false,
  },
  {
    id: 'slide2',
    fileBG: '/img/system/HeroImages/hero_image_3.jpg',
    textMaster: 'тентовые каркасные здания',
    textSlave: {
      top: 'Проектирование, произвоство и монтаж каркасных тентовых ангаров, павильонов, тепляков и укрытий.',
      bottom: 'Вы можете заполнить и отправить форму запроса. Мы вышлем коммерческое предложение.',
    },
    anim: false,
  },
];
const animationOff = () => {
  slides.forEach((it) => {
    document.getElementById(it.id + 'Master').classList.replace('fadeInUp', 'with_animation');
    document.getElementById(it.id + 'Slave').classList.replace('fadeInUp', 'with_animation');
    document.getElementById(it.id + 'Buttons').classList.replace('fadeIn', 'with_animation');
  });
};
const moveSlide = (wrapper, slide) => {
  wrapper.current.style.left = String(document.documentElement.clientWidth * (0 - slide)) + 'px';
};

export const SectionHero = () => {
  const wrapperEl = useRef(null);
  const leftNavEl = useRef(null);
  const rightNavEl = useRef(null);
  let slideNumber = 0;

  const setWrapperWidth = () => {
    const width = document.documentElement.clientWidth;
    wrapperEl.current.style.width = String(width * 3) + 'px';
    wrapperEl.current.style.transition = 'left 0s';
    slides.forEach((it) => {
      document.getElementById(it.id).style.width = String(width) + 'px';
    });
  };

  const handlerWindowResize = () => {
    setWrapperWidth();
    moveSlide(wrapperEl, slideNumber);
  };
  const handlerNavClick = (evt) => {
    const elem = evt.currentTarget;
    switch (elem) {
      case leftNavEl.current:
        slideNumber = slideNumber - 1;
        rightNavEl.current.style.opacity = '1';
        slideNumber === 0 ? (leftNavEl.current.style.opacity = '0') : null;
        break;
      case rightNavEl.current:
        slideNumber = slideNumber + 1;
        leftNavEl.current.style.opacity = '1';
        slideNumber < slides.length - 1 ? (rightNavEl.current.style.opacity = '0') : null;
        break;
      default:
        break;
    }

    slideNumber === 2 ? (rightNavEl.current.style.opacity = '0') : (rightNavEl.current.style.opacity = '1');

    animationOff();
    document.getElementById(slides[slideNumber].id + 'Master').classList.replace('with_animation', 'fadeInUp');
    document.getElementById(slides[slideNumber].id + 'Slave').classList.replace('with_animation', 'fadeInUp');
    document.getElementById(slides[slideNumber].id + 'Buttons').classList.replace('with_animation', 'fadeIn');
    wrapperEl.current.style.transition = 'left 0.8s';
    moveSlide(wrapperEl, slideNumber);
  };

  useEffect(() => {
    window.addEventListener('resize', handlerWindowResize);
    setWrapperWidth();
    return () => {
      window.removeEventListener('resize', handlerWindowResize);
    };
  });

  return (
    <section className={styles.hero_section}>
      <div className={styles.slider_wrapper} ref={wrapperEl}>
        {slides.map((it) => {
          return (
            <SlideHero
              fileName={it.fileBG}
              masterText={it.textMaster}
              slaveTextTop={it.textSlave.top}
              slaveTextBottom={it.textSlave.bottom}
              id={it.id}
              anim={it.anim}
              key={it.id}
            />
          );
        })}

        <div className={styles.overlay} />
      </div>

      <a className={styles.nav + ' ' + styles.prev} ref={leftNavEl} onClick={handlerNavClick}>
        <i className="far fa-chevron-left" />
        <div className={styles.text + ' ' + styles.text_left}>назад</div>
      </a>
      <a className={styles.nav + ' ' + styles.next} ref={rightNavEl} onClick={handlerNavClick}>
        <i className="far fa-chevron-right" />
        <div className={styles.text + ' ' + styles.text_right}>далее</div>
      </a>
    </section>
  );
};
