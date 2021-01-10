import styles from './section-hero.module.scss';
import React, { useRef, useEffect } from 'react';
import { Slides } from './slides';
import { getTransform } from '../../utils/functions';

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
const animationOff = (slideNumber: number) => {
  setTimeout(() => {
    document.getElementById(slides[slideNumber].id + 'Master').classList.replace('fadeInUp', 'with_animation');
    document.getElementById(slides[slideNumber].id + 'Slave').classList.replace('fadeInUp', 'with_animation');
    document.getElementById(slides[slideNumber].id + 'Buttons').classList.replace('fadeIn', 'with_animation');
  }, 1000);
};
const animationOn = (slideNumber: number) => {
  document.getElementById(slides[slideNumber].id + 'Master').classList.replace('with_animation', 'fadeInUp');
  document.getElementById(slides[slideNumber].id + 'Slave').classList.replace('with_animation', 'fadeInUp');
  document.getElementById(slides[slideNumber].id + 'Buttons').classList.replace('with_animation', 'fadeIn');
};
const setWrapperTransform = (wrapperEl, X: number) => {
  const coordX = String(X);
  wrapperEl.current.style.transform = ' translate3d(' + coordX + 'px, 0px, 0px)';
};
const moveSlide = (wrapper, slide: number) => {
  const leftCoord = document.documentElement.clientWidth * (0 - slide);
  setWrapperTransform(wrapper, leftCoord);
};

export const SectionHero = (): JSX.Element => {
  const wrapperEl: React.Ref<HTMLDivElement> = useRef(null);
  const leftNavEl: React.Ref<HTMLAnchorElement> = useRef(null);
  const rightNavEl: React.Ref<HTMLAnchorElement> = useRef(null);
  let slideNumber = 0;
  let touchStartX = 0;
  let wrapperElBaseX = 0;
  let swipeDirection = '';
  let swipeDistanse = 0;
  let swipeAcsess = false;

  const setWrapperWidth = () => {
    const width = document.documentElement.clientWidth;
    wrapperEl.current.style.width = String(width * 3) + 'px';
    wrapperEl.current.style.transitionDuration = '0s';
    slides.forEach((it) => {
      document.getElementById(it.id).style.width = String(width) + 'px';
    });
  };
  const setNavVisibles = (
    elementNavLeft: HTMLAnchorElement,
    elementNavRight: HTMLAnchorElement,
    slideNumber: number
  ) => {
    if (slideNumber === 0) {
      elementNavLeft.removeEventListener('click', handlerNavClick);
      elementNavLeft.style.opacity = '0';
      elementNavLeft.style.cursor = 'grab';
    }
    if (slideNumber === 1) {
      elementNavLeft.style.opacity = '1';
      elementNavLeft.style.cursor = 'pointer';
    }
    if (slideNumber === slides.length - 1) {
      elementNavRight.removeEventListener('click', handlerNavClick);
      elementNavRight.style.opacity = '0';
      elementNavRight.style.cursor = 'grab';
    }
    if (slideNumber === slides.length - 2) {
      elementNavRight.style.opacity = '1';
      elementNavRight.style.cursor = 'pointer';
    }
  };
  const handlerWindowResize = () => {
    setWrapperWidth();
    moveSlide(wrapperEl, slideNumber);
  };
  const handlerNavClick = (evt: Event) => {
    const elem = evt.currentTarget;
    removeTouchListeners(wrapperEl.current);
    switch (elem) {
      case leftNavEl.current:
        if (slideNumber > 0) {
          animationOff(slideNumber);
          slideNumber = slideNumber - 1;
        }
        break;
      case rightNavEl.current:
        if (slideNumber < slides.length - 1) {
          animationOff(slideNumber);
          slideNumber = slideNumber + 1;
        }
        break;
      default:
        break;
    }
    setNavVisibles(leftNavEl.current, rightNavEl.current, slideNumber);
    animationOn(slideNumber);
    wrapperEl.current.style.transitionDuration = '0.8s';
    moveSlide(wrapperEl, slideNumber);
  };

  const handlerOnTouchStart = (evt: TouchEvent) => {
    swipeDistanse = 0;
    touchStartX = evt.touches[0].clientX;
    wrapperElBaseX = Number(getTransform(wrapperEl.current)[0]);
    console.log(wrapperElBaseX, slideNumber);
    wrapperEl.current.style.transitionDuration = '50ms';
  };
  const handlerOnTouchMove = (evt: TouchEvent) => {
    swipeDistanse = evt.touches[0].clientX - touchStartX;
    if (Math.abs(swipeDistanse) < 10) {
      return null;
    }
    const maxSwipe = document.documentElement.clientWidth * 0.5;
    swipeDirection = swipeDistanse > 0 ? 'left' : 'right';
    swipeAcsess = Math.abs(swipeDistanse) > maxSwipe;

    if (swipeDistanse > maxSwipe && swipeDirection === 'left' && slideNumber === 0) {
      swipeDistanse = maxSwipe;
    }
    if (Math.abs(swipeDistanse) > maxSwipe && swipeDirection === 'right' && slideNumber === slides.length - 1) {
      swipeDistanse = 0 - maxSwipe;
    }
    // move wrapper
    setWrapperTransform(wrapperEl, wrapperElBaseX + swipeDistanse);
  };
  const handlerOnTouchEnd = () => {
    wrapperEl.current.style.transitionDuration = '0.8s';
    if (swipeDistanse !== 0) {
      removeTouchListeners(wrapperEl.current);
      removeClickListeners();
    }

    if (swipeAcsess) {
      switch (swipeDirection) {
        case 'right':
          if (slideNumber < slides.length - 1) {
            animationOff(slideNumber);
            slideNumber = slideNumber + 1;
            animationOn(slideNumber);
            moveSlide(wrapperEl, slideNumber);
          } else {
            setWrapperTransform(wrapperEl, wrapperElBaseX);
          }
          break;
        case 'left':
          if (slideNumber > 0) {
            animationOff(slideNumber);
            slideNumber = slideNumber - 1;
            animationOn(slideNumber);
            moveSlide(wrapperEl, slideNumber);
          } else {
            setWrapperTransform(wrapperEl, wrapperElBaseX);
          }
          break;
        default:
          break;
      }
    } else {
      setWrapperTransform(wrapperEl, wrapperElBaseX);
    }
    setNavVisibles(leftNavEl.current, rightNavEl.current, slideNumber);
    console.log('distanse', swipeDistanse, 'acsess', swipeAcsess);
  };

  const handlerTransitionEnd = (evt: Event) => {
    if (evt.target === wrapperEl.current) {
      console.log('handlerTransitionEnd');
      addTouchListeners(wrapperEl.current);
      addClickListeners();
    }
  };

  const addClickListeners = () => {
    if (slideNumber > 0) leftNavEl.current.addEventListener('click', handlerNavClick);
    if (slideNumber < slides.length - 1) rightNavEl.current.addEventListener('click', handlerNavClick);
  };
  const removeClickListeners = () => {
    leftNavEl.current.removeEventListener('click', handlerNavClick);
    rightNavEl.current.removeEventListener('click', handlerNavClick);
  };

  const addTouchListeners = (wrapper: HTMLDivElement) => {
    wrapper.addEventListener('touchstart', handlerOnTouchStart);
    wrapper.addEventListener('touchmove', handlerOnTouchMove);
    wrapper.addEventListener('touchend', handlerOnTouchEnd);
  };
  const removeTouchListeners = (wrapper: HTMLDivElement) => {
    wrapper.removeEventListener('touchstart', handlerOnTouchStart);
    wrapper.removeEventListener('touchmove', handlerOnTouchMove);
    wrapper.removeEventListener('touchend', handlerOnTouchEnd);
  };

  useEffect(() => {
    window.addEventListener('resize', handlerWindowResize);
    setWrapperWidth();
    addTouchListeners(wrapperEl.current);
    setNavVisibles(leftNavEl.current, rightNavEl.current, slideNumber);
    rightNavEl.current.addEventListener('click', handlerNavClick);
    wrapperEl.current.addEventListener('transitionend', handlerTransitionEnd);
    return () => {
      window.removeEventListener('resize', handlerWindowResize);
    };
  });

  return (
    <section className={styles.slider_fullwidth}>
      <div className={styles.slider_swiper}>
        <div className={'loading'} />
        <div className={'paginationParent'}>
          <a className={styles.nav + ' ' + styles.prev} ref={leftNavEl}>
            <i className="far fa-chevron-left" />
            <div className={styles.text + ' ' + styles.text_left}>назад</div>
          </a>
          <a className={styles.nav + ' ' + styles.next} ref={rightNavEl}>
            <i className="far fa-chevron-right" />
            <div className={styles.text + ' ' + styles.text_right}>далее</div>
          </a>
        </div>
        <div className={styles.slider_wrapper} ref={wrapperEl} style={{ transform: 'translate3d(0,0,0)' }}>
          {slides.map((it) => {
            return (
              <Slides
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
        </div>
      </div>
    </section>
  );
};
