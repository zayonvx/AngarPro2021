import React, { useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import styles from './section-hero.module.scss';
import Slides from './slides';
import { getTransform } from '../../utils/functions';
import Loading from '../loading/loading';

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
const sliderParameters = {
  wrapperAnimationTransition: {
    durationMain: '800ms',
    durationTouchStart: '50ms',
  },
  minSwipeDistance: 10,
  maxEdgeSwipeDistance: 150,
  acceptSwipeDistance: 100,
  LEFT: 'left',
  RIGHT: 'right',
};
const slideLastIndex = slides.length - 1;
const animationOff = (slideNumber: number) => {
  document.getElementById(`${slides[slideNumber].id}Master`).classList.replace('fadeInUp', 'with_animation');
  document.getElementById(`${slides[slideNumber].id}Slave`).classList.replace('fadeInUp', 'with_animation');
  document.getElementById(`${slides[slideNumber].id}Buttons`).classList.replace('fadeIn', 'with_animation');
};
const animationOn = (slideNumber: number) => {
  document.getElementById(`${slides[slideNumber].id}Master`).classList.replace('with_animation', 'fadeInUp');
  document.getElementById(`${slides[slideNumber].id}Slave`).classList.replace('with_animation', 'fadeInUp');
  document.getElementById(`${slides[slideNumber].id}Buttons`).classList.replace('with_animation', 'fadeIn');
};
const translate = {
  prefix: ' translate3d(',
  suffix: 'px, 0px, 0px)',
};

const SectionHero = (): JSX.Element => {
  const wrapperEl: React.Ref<HTMLDivElement> = useRef(null);
  const leftNavEl: React.Ref<HTMLButtonElement> = useRef(null);
  const rightNavEl: React.Ref<HTMLButtonElement> = useRef(null);
  let slideNumber = 0;
  let touchStartX = 0;
  let wrapperElBaseX = 0;
  let swipeDirection = '';
  let swipeDistanse = 0;
  let swipeAcsess = false;

  const setWrapperWidth = () => {
    wrapperEl.current.style.transitionDuration = '0s';
    const width = document.documentElement.clientWidth;
    wrapperEl.current.style.width = `${String(width * 3)}px`;
    slides.forEach((it) => {
      document.getElementById(it.id).style.width = `${String(width)}px`;
    });
  };
  const moveSlide = (wrapper: HTMLDivElement, slideNumberNew: number, slideNumberPrev: number) => {
    const setNavVisibles = (NavLeft: HTMLButtonElement, NavRight: HTMLButtonElement, slide: number) => {
      if (slide === 0) {
        // NavLeft.removeEventListener('click', handlerNavClick);
        NavLeft.style.opacity = '0';
        NavLeft.style.cursor = 'default';
      }
      if (slide === 1) {
        NavLeft.style.opacity = '1';
        NavLeft.style.cursor = 'pointer';
      }
      if (slide === slideLastIndex) {
        // NavRight.removeEventListener('click', handlerNavClick);
        NavRight.style.opacity = '0';
        NavRight.style.cursor = 'default';
      }
      if (slide === slideLastIndex - 1) {
        NavRight.style.opacity = '1';
        NavRight.style.cursor = 'pointer';
      }
    };
    // removeDriveListeners(wrapperEl.current, leftNavEl.current, rightNavEl.current);
    wrapperEl.current.style.transitionDuration = sliderParameters.wrapperAnimationTransition.durationMain;
    setTimeout(() => {
      animationOff(slideNumberPrev);
    }, 500);
    setNavVisibles(leftNavEl.current, rightNavEl.current, slideNumberNew);
    animationOn(slideNumberNew);
    const leftCoord = String(document.documentElement.clientWidth * (0 - slideNumberNew));
    wrapper.style.transform = translate.prefix + leftCoord + translate.suffix;
  };
  const handlerNavClick = (event: MouseEvent) => {
    const slideNumberPrev = slideNumber;
    switch (event.currentTarget) {
      case leftNavEl.current:
        if (slideNumber > 0) {
          slideNumber -= 1;
          moveSlide(wrapperEl.current, slideNumber, slideNumberPrev);
        }
        break;
      case rightNavEl.current:
        if (slideNumber < slideLastIndex) {
          slideNumber += 1;
          moveSlide(wrapperEl.current, slideNumber, slideNumberPrev);
        }
        break;
      default:
        break;
    }
  };
  const handlerWindowResize = () => {
    setWrapperWidth();
    const leftCoord = String(document.documentElement.clientWidth * (0 - slideNumber));
    wrapperEl.current.style.transform = translate.prefix + leftCoord + translate.suffix;
  };

  const handlerOnTouchStart = (evt: TouchEvent) => {
    swipeDistanse = 0;
    touchStartX = evt.touches[0].clientX;
    wrapperElBaseX = Number(getTransform(wrapperEl.current)[0]);
    wrapperEl.current.style.transitionDuration = sliderParameters.wrapperAnimationTransition.durationTouchStart;
  };
  const handlerOnTouchMove = (evt: TouchEvent) => {
    swipeDistanse = evt.touches[0].clientX - touchStartX;
    if (Math.abs(swipeDistanse) < sliderParameters.minSwipeDistance) {
      return null;
    }
    const maxEdgeSwipe = sliderParameters.maxEdgeSwipeDistance;
    swipeDirection = swipeDistanse > 0 ? sliderParameters.LEFT : sliderParameters.RIGHT;
    swipeAcsess = Math.abs(swipeDistanse) > sliderParameters.acceptSwipeDistance;
    if (Math.abs(swipeDistanse) > maxEdgeSwipe) {
      switch (swipeDirection) {
        case sliderParameters.LEFT:
          if (slideNumber === 0) {
            swipeDistanse = maxEdgeSwipe;
            swipeAcsess = false;
          }
          break;
        case sliderParameters.RIGHT:
          if (slideNumber === slideLastIndex) {
            swipeDistanse = 0 - maxEdgeSwipe;
            swipeAcsess = false;
          }
          break;
        default:
          break;
      }
    }
    // move wrapper
    const vector = String(wrapperElBaseX + swipeDistanse);
    wrapperEl.current.style.transform = translate.prefix + vector + translate.suffix;
    return null;
  };
  const handlerOnTouchEnd = () => {
    if (
      (swipeAcsess && swipeDirection === sliderParameters.RIGHT && slideNumber < slideLastIndex) ||
      (swipeAcsess && swipeDirection === sliderParameters.LEFT && slideNumber > 0)
    ) {
      const slideNumberPrev = slideNumber;

      switch (swipeDirection) {
        case sliderParameters.RIGHT:
          slideNumber += 1;
          break;
        case sliderParameters.LEFT:
          slideNumber -= 1;
          break;
        default:
          break;
      }
      moveSlide(wrapperEl.current, slideNumber, slideNumberPrev);
    } else {
      wrapperEl.current.style.transform = translate.prefix + String(wrapperElBaseX) + translate.suffix;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handlerWindowResize);
    setWrapperWidth();
    return () => {
      window.removeEventListener('resize', handlerWindowResize);
    };
  });

  return (
    <section className={styles.slider_fullwidth}>
      <div className={styles.slider_swiper}>
        <Loading />
        <div className="paginationParent">
          <button className={`${styles.nav} ${styles.prev}`} ref={leftNavEl} type="button" onClick={handlerNavClick}>
            <span className="far fa-chevron-left" />
            <div className={`${styles.text} ${styles.text_left}`}>назад</div>
          </button>
          <button className={`${styles.nav} ${styles.next}`} ref={rightNavEl} type="button" onClick={handlerNavClick}>
            <span className="far fa-chevron-right" />
            <div className={`${styles.text} ${styles.text_right}`}>далее</div>
          </button>
        </div>
        <div
          className={styles.slider_wrapper}
          ref={wrapperEl}
          style={{ transform: 'translate3d(0,0,0)' }}
          onTouchStart={handlerOnTouchStart}
          onTouchMove={handlerOnTouchMove}
          onTouchEnd={handlerOnTouchEnd}
        >
          {slides.map((it) => (
            <Slides
              fileName={it.fileBG}
              masterText={it.textMaster}
              slaveTextTop={it.textSlave.top}
              slaveTextBottom={it.textSlave.bottom}
              id={it.id}
              anim={it.anim}
              key={it.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
