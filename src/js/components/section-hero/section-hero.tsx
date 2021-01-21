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
    amin: true,
  },
  {
    id: 'slide1',
    fileBG: '/img/system/HeroImages/hero_image_2.jpg',
    textMaster: 'ангары и навесы из профлиста',
    textSlave: {
      top: 'Мы производим и монтируем комплекты каркасных ангаров с ограждениями из профнастила.',
      bottom: 'Воспользуйтесь калькулятором стоимости зданий чтобы узнать цену.',
    },
    amin: false,
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
  acceptSwipeDistance: 150,
  LEFT: 'left',
  RIGHT: 'right',
};
const slideLastIndex = slides.length - 1;
const animationPrepare = (slideNumber: number) => {
  document.getElementById(`${slides[slideNumber].id}Master`).classList.replace('fadeInUp', 'with_animation');
  document.getElementById(`${slides[slideNumber].id}Slave`).classList.replace('fadeInUp', 'with_animation');
  document.getElementById(`${slides[slideNumber].id}Buttons`).classList.replace('fadeIn', 'with_animation');
};
const animationStart = (slideNumber: number) => {
  setTimeout(() => {
    document.getElementById(`${slides[slideNumber].id}Master`).classList.replace('with_animation', 'fadeInUp');
    document.getElementById(`${slides[slideNumber].id}Slave`).classList.replace('with_animation', 'fadeInUp');
    document.getElementById(`${slides[slideNumber].id}Buttons`).classList.replace('with_animation', 'fadeIn');
  }, 100);
};
const translate = {
  prefix: ' translate3d(',
  suffix: 'px, 0px, 0px)',
};

const SectionHero = (): JSX.Element => {
  const wrapperEl: React.Ref<HTMLDivElement> = useRef(null);
  const leftNavEl: React.Ref<HTMLButtonElement> = useRef(null);
  const rightNavEl: React.Ref<HTMLButtonElement> = useRef(null);
  const loaded = true;
  let slideNumber = 0;
  let startX = 0;
  let elementX = 0;

  const arrowVisibles = () => {
    const navLeft = leftNavEl.current;
    const navRight = rightNavEl.current;
    switch (slideNumber) {
      case 0:
        navLeft.style.opacity = '0';
        navLeft.style.cursor = 'default';
        break;
      case slideLastIndex:
        navRight.style.opacity = '0';
        navRight.style.cursor = 'default';
        break;
      default:
        navLeft.style.opacity = '1';
        navLeft.style.cursor = 'pointer';
        navRight.style.opacity = '1';
        navRight.style.cursor = 'pointer';
        break;
    }
  };
  const setWrapperWidth = () => {
    wrapperEl.current.style.transitionDuration = '0s';
    const width = document.documentElement.clientWidth;
    wrapperEl.current.style.width = `${String(width * 3)}px`;
    slides.forEach((it) => {
      document.getElementById(it.id).style.width = `${String(width)}px`;
    });
    wrapperEl.current.style.transitionDuration = sliderParameters.wrapperAnimationTransition.durationMain;
  };
  const moveSlide = (direction: string) => {
    const prevSlideNumber = slideNumber;
    let willSlided = false;
    switch (direction) {
      case sliderParameters.LEFT:
        if (slideNumber > 0) {
          willSlided = true;
          slideNumber -= 1;
        }
        break;
      case sliderParameters.RIGHT:
        if (slideNumber < slideLastIndex) {
          willSlided = true;
          slideNumber += 1;
        }
        break;
      default:
        break;
    }
    if (willSlided) {
      arrowVisibles();
      setTimeout(() => animationPrepare(prevSlideNumber), 500);
      animationStart(slideNumber);
      const leftCoord = String(document.documentElement.clientWidth * (0 - slideNumber));
      wrapperEl.current.style.transform = translate.prefix + leftCoord + translate.suffix;
    }
  };
  const handlerNavClick = (event: MouseEvent) => {
    const target = event.currentTarget;
    const direction = target === leftNavEl.current ? sliderParameters.LEFT : sliderParameters.RIGHT;
    moveSlide(direction);
  };
  const handlerWindowResize = () => {
    setWrapperWidth();
    const leftCoord = String(document.documentElement.clientWidth * (0 - slideNumber));
    wrapperEl.current.style.transform = translate.prefix + leftCoord + translate.suffix;
  };

  const handlerOnTouchStart = (evt: TouchEvent) => {
    wrapperEl.current.style.transitionDuration = sliderParameters.wrapperAnimationTransition.durationTouchStart;
    startX = evt.touches[0].clientX;
    elementX = Number(getTransform(wrapperEl.current)[0]);
  };
  const handlerOnTouchMove = (evt: TouchEvent) => {
    // evt.preventDefault();
    const currentX = evt.touches[0].clientX;
    const distance = startX - currentX;
    const localX = String(elementX - distance);
    wrapperEl.current.style.transform = translate.prefix + localX + translate.suffix;
  };
  const handlerOnTouchEnd = (evt: TouchEvent) => {
    // evt.preventDefault();
    const currentX = evt.changedTouches[0].clientX;
    const distance = currentX - startX;
    if (Math.abs(distance) > sliderParameters.acceptSwipeDistance) {
      if (distance > 0) {
        moveSlide(sliderParameters.LEFT);
      } else {
        moveSlide(sliderParameters.RIGHT);
      }
    }
    const leftCoord = String(document.documentElement.clientWidth * (0 - slideNumber));
    wrapperEl.current.style.transform = translate.prefix + leftCoord + translate.suffix;
    wrapperEl.current.style.transitionDuration = sliderParameters.wrapperAnimationTransition.durationMain;
  };
  const handlerOnTouchCancel = () => {
    // evt.preventDefault();
    const leftCoord = String(document.documentElement.clientWidth * (0 - slideNumber));
    wrapperEl.current.style.transform = translate.prefix + leftCoord + translate.suffix;
  };

  useEffect(() => {
    window.addEventListener('resize', handlerWindowResize);
    window.addEventListener('load', () => {
      document.getElementById('slider_swiper_payload').classList.remove('visHidden');
    });
    animationStart(0);
    setWrapperWidth();
    return () => {
      window.removeEventListener('resize', handlerWindowResize);
    };
  });

  return (
    <section className={styles.slider_fullwidth}>
      <div className={styles.slider_swiper}>
        <Loading loaded={loaded} />
        <div id="slider_swiper_payload" className="visHidden">
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
            onTouchCancel={handlerOnTouchCancel}
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
      </div>
    </section>
  );
};

export default SectionHero;
