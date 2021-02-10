import React, { useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styles from './section-hero.module.scss';
import Slides from './slide';
import { getTransform, setHeroWrapperWidth } from '../../utils/functions';
import { slides, sliderParameters } from '../../database/slides';
import store from '../../../store/store';
import changeSlideNumber from '../../../store/slider/actions';
import Loading from '../loading/loading';
import { ILoadedState } from '../../../store/loaded/types';

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

const mapState = (state: ILoadedState) => ({ loaded: state.loaded.slide });
const connector = connect(mapState);
type StateProps = ConnectedProps<typeof connector>;

const SectionHero = ({ ...props }: StateProps): JSX.Element => {
  const wrapperEl: React.Ref<HTMLDivElement> = useRef(null);
  const leftNavEl: React.Ref<HTMLButtonElement> = useRef(null);
  const rightNavEl: React.Ref<HTMLButtonElement> = useRef(null);
  const { loaded } = props;

  let startX = 0;
  let elementX = 0;

  const arrowVisibles = () => {
    const navLeft = leftNavEl.current;
    const navRight = rightNavEl.current;
    const slideNumber = store.getState().slider.currentSlider;
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
  const moveSlide = (direction: string) => {
    const oldSlideNumber = store.getState().slider.currentSlider;
    let willSlided = false;
    let newSliderNumber = null;
    switch (direction) {
      case sliderParameters.LEFT:
        if (oldSlideNumber > 0) {
          willSlided = true;
          newSliderNumber = oldSlideNumber - 1;
          store.dispatch(changeSlideNumber(newSliderNumber));
        }
        break;
      case sliderParameters.RIGHT:
        if (oldSlideNumber < slideLastIndex) {
          willSlided = true;
          newSliderNumber = oldSlideNumber + 1;
          store.dispatch(changeSlideNumber(newSliderNumber));
        }
        break;
      default:
        break;
    }
    if (willSlided) {
      arrowVisibles();
      setTimeout(() => animationPrepare(oldSlideNumber), 500);
      animationStart(newSliderNumber);
      const leftCoord = String(document.documentElement.clientWidth * (0 - newSliderNumber));
      wrapperEl.current.style.transform = translate.prefix + leftCoord + translate.suffix;
    }
    return willSlided;
  };
  const handlerNavClick = (event: MouseEvent) => {
    const target = event.currentTarget;
    const direction = target === leftNavEl.current ? sliderParameters.LEFT : sliderParameters.RIGHT;
    moveSlide(direction);
  };

  const handlerOnTouchStart = (evt: TouchEvent) => {
    wrapperEl.current.style.transitionDuration = sliderParameters.wrapperAnimationTransition.durationTouchStart;
    startX = evt.touches[0].clientX;
    elementX = Number(getTransform(wrapperEl.current)[0]);
  };
  const handlerOnTouchMove = (evt: TouchEvent) => {
    const currentX = evt.touches[0].clientX;
    const distance = startX - currentX;
    const localX = String(elementX - distance);
    wrapperEl.current.style.transform = translate.prefix + localX + translate.suffix;
  };
  const handlerOnTouchEnd = (evt: TouchEvent) => {
    const currentX = evt.changedTouches[0].clientX;
    const distance = currentX - startX;
    let willSlided = false;
    if (Math.abs(distance) > sliderParameters.acceptSwipeDistance) {
      if (distance > 0) {
        willSlided = moveSlide(sliderParameters.LEFT);
      } else {
        willSlided = moveSlide(sliderParameters.RIGHT);
      }
    }
    if (!willSlided) {
      const slideNumber = store.getState().slider.currentSlider;
      const leftCoord = String(document.documentElement.clientWidth * (0 - slideNumber));
      wrapperEl.current.style.transform = translate.prefix + leftCoord + translate.suffix;
    }
    wrapperEl.current.style.transitionDuration = sliderParameters.wrapperAnimationTransition.durationMain;
  };
  const handlerOnTouchCancel = () => {
    const slideNumber = store.getState().slider.currentSlider;
    const leftCoord = String(document.documentElement.clientWidth * (0 - slideNumber));
    wrapperEl.current.style.transform = translate.prefix + leftCoord + translate.suffix;
  };
  useEffect(() => {
    animationStart(0);
    setHeroWrapperWidth();
    wrapperEl.current.style.transitionDuration = sliderParameters.wrapperAnimationTransition.durationMain;
  });
  return (
    <section className={styles.slider_fullwidth}>
      <div className={styles.slider_swiper}>
        <Loading loaded={loaded} />
        <div id="slider_swiper_payload">
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
            id="sliderWrapper"
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
                fileNamePrefix={it.fileNamePrefix}
                masterText={it.textMaster}
                slaveTextTop={it.textSlave.top}
                slaveTextBottom={it.textSlave.bottom}
                id={it.id}
                anim={it.anim}
                alt={it.alt}
                key={it.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default connector(SectionHero);
