import styles from './section-hero.module.scss';
import React, { useRef, useEffect } from 'react';
import { SlideHero } from './slide-hero';

const animationOff = () => {
  document.getElementById('slide0Master').classList.replace('fadeInUp', 'with_animation');
  document.getElementById('slide0Slave').classList.replace('fadeInUp', 'with_animation');
  document.getElementById('slide1Master').classList.replace('fadeInUp', 'with_animation');
  document.getElementById('slide1Slave').classList.replace('fadeInUp', 'with_animation');
  document.getElementById('slide2Master').classList.replace('fadeInUp', 'with_animation');
  document.getElementById('slide2Slave').classList.replace('fadeInUp', 'with_animation');
  document.getElementById('slide0Buttons').classList.replace('fadeIn', 'with_animation');
  document.getElementById('slide1Buttons').classList.replace('fadeIn', 'with_animation');
  document.getElementById('slide2Buttons').classList.replace('fadeIn', 'with_animation');
};
const moveSlide = (wrapper, slide) => {
  wrapper.current.style.left = String(window.innerWidth * (0 - slide)) + 'px';
};

export const SectionHero = () => {
  const wrapperEl = useRef(null);
  const leftNavEl = useRef(null);
  const rightNavEl = useRef(null);
  let slide = 0;

  const calcWrapperWidth = () => {
    wrapperEl.current.style.width = String(window.innerWidth * 3) + 'px';
    wrapperEl.current.style.transition = 'left 0s';
    moveSlide(wrapperEl, slide);
  };

  const handlerNavClick = (evt) => {
    const elem = evt.currentTarget;
    switch (elem) {
      case leftNavEl.current:
        slide > 0 ? (slide = slide - 1) : null;
        break;
      case rightNavEl.current:
        slide < 2 ? (slide = slide + 1) : null;
        break;
      default:
        break;
    }
    slide === 0 ? (leftNavEl.current.style.opacity = '0') : (leftNavEl.current.style.opacity = '1');
    slide === 2 ? (rightNavEl.current.style.opacity = '0') : (rightNavEl.current.style.opacity = '1');

    animationOff();
    switch (slide) {
      case 0:
        document.getElementById('slide0Master').classList.replace('with_animation', 'fadeInUp');
        document.getElementById('slide0Slave').classList.replace('with_animation', 'fadeInUp');
        document.getElementById('slide0Buttons').classList.replace('with_animation', 'fadeIn');
        break;
      case 1:
        document.getElementById('slide1Master').classList.replace('with_animation', 'fadeInUp');
        document.getElementById('slide1Slave').classList.replace('with_animation', 'fadeInUp');
        document.getElementById('slide1Buttons').classList.replace('with_animation', 'fadeIn');
        break;
      case 2:
        document.getElementById('slide2Master').classList.replace('with_animation', 'fadeInUp');
        document.getElementById('slide2Slave').classList.replace('with_animation', 'fadeInUp');
        document.getElementById('slide2Buttons').classList.replace('with_animation', 'fadeIn');
        break;
    }

    wrapperEl.current.style.transition = 'left 0.8s';
    moveSlide(wrapperEl, slide);
  };

  useEffect(() => {
    window.addEventListener('resize', calcWrapperWidth);
    return () => {
      window.removeEventListener('resize', calcWrapperWidth);
    };
  });

  return (
    <section className={styles.hero_section}>
      <div className={styles.slider_wrapper} ref={wrapperEl} style={{ width: '300%' }}>
        <SlideHero
          fileName={'/img/system/HeroImages/hero_image_1.jpg'}
          masterText={'каркасные здания из сендвич панелей'}
          slaveText={'У нас вы можете заказать проектирование, производство и монтаж здания из сендвич панелей.'}
          id={'slide0'}
          anim={true}
        />
        <SlideHero
          fileName={'/img/system/HeroImages/hero_image_2.jpg'}
          masterText={'ангары и навесы из профнастила'}
          slaveText={
            'Мы производим и монтируем комплекты каркасных ангаров с ограждениями из профилированного стального листа.'
          }
          id={'slide1'}
          anim={false}
        />
        <SlideHero
          fileName={'/img/system/HeroImages/hero_image_3.jpg'}
          masterText={'тентовые каркасные здания'}
          slaveText={'Проектирование, произвоство и монтаж каркасных тентовых ангаров, павильонов, тепляков и укрытий.'}
          id={'slide2'}
          anim={false}
        />
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
