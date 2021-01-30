import { sliderParameters } from '../database/slides';
import store from '../../store/store';
import { changePreviewsInRow, changePreviewsRows } from '../../store/preview/actions';

const getTransform = (el: Element): string[] => {
  const thing = /matrix(?:(3d)\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))(?:, (-{0,1}\d+)), -{0,1}\d+\)|\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))\))/;
  const transform = window.getComputedStyle(el, null).getPropertyValue('-webkit-transform');
  const results = thing.exec(transform); // transform.match(thing);

  if (!results) return ['0', '0', '0'];
  if (results[1] === '3d') return results.slice(2, 5);

  results.push(String(0));
  return results.slice(5, 8); // returns the [X,Y,Z,1] values
};
const setHeroWrapperWidth = (): void => {
  const element = document.getElementById('sliderWrapper');
  element.style.transitionDuration = '0s';
  const width = document.documentElement.clientWidth;
  element.style.width = `${String(width * 3)}px`;
  // slides.forEach((it) => {
  //   // document.getElementById(it.id).style.width = `${String(width)}px`;
  // });
};
const setPreviewSize = (): void => {
  const { clientWidth } = document.documentElement;
  let previewsInRow = 7;
  let previewsRows = 2;
  if (clientWidth <= 1920) {
    previewsInRow = 6;
    previewsRows = 2;
  }
  if (clientWidth < 1680) {
    previewsInRow = 5;
    previewsRows = 2;
  }
  if (clientWidth < 1024) {
    previewsInRow = 4;
    previewsRows = 2;
  }
  if (clientWidth < 900) {
    previewsInRow = 3;
    previewsRows = 2;
  }
  if (clientWidth < 600) {
    previewsInRow = 2;
    previewsRows = 2;
  }
  store.dispatch(changePreviewsInRow(previewsInRow));
  store.dispatch(changePreviewsRows(previewsRows));
  const previewWidth = clientWidth / previewsInRow;
  const previewElements = document.querySelectorAll('.preview__image-wrapper');
  const widthLi = `width: ${String(previewWidth)}px`;
  const heightLi = `height: ${String(previewWidth)}px`;
  const styleLi = `${widthLi}; ${heightLi}`;
  previewElements.forEach((it) => {
    it.setAttribute('style', styleLi);
  });
};
const windowResize = (): void => {
  const elementSliderWrapper = document.getElementById('sliderWrapper');
  setHeroWrapperWidth();
  setPreviewSize();
  const state = store.getState();
  const sliderNumber = state.slider.currentSlider;
  const leftCoord = String(document.documentElement.clientWidth * (0 - sliderNumber));
  elementSliderWrapper.style.transform = ` translate3d(${leftCoord}px, 0px, 0px)`;
  setTimeout(() => {
    elementSliderWrapper.style.transitionDuration = sliderParameters.wrapperAnimationTransition.durationMain;
  }, 500);
};
const toggleBodyNoScroll = (value: boolean): null => {
  try {
    const bodyTag = document.querySelector('html');
    if (value && bodyTag) {
      bodyTag.classList.add('noscroll');
    } else {
      bodyTag.classList.remove('noscroll');
    }
  } catch {
    return null;
  }
  return null;
};
const setTrailingZeros = (num: number, size: number): string => {
  const stringNum = `${num}`;
  return stringNum.padStart(size, '0');
};
export { getTransform, setHeroWrapperWidth, setPreviewSize, windowResize, toggleBodyNoScroll, setTrailingZeros };
