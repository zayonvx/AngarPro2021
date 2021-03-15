import store from '../../store/store';
import { changePreviewsInRow, changePreviewsRows } from '../../store/preview/actions';

export const isOnVisibleSpace = (element: Element): boolean => {
  const bodyHeight = window.innerHeight;
  const elemRect = element.getBoundingClientRect();
  const offsetTop = elemRect.top;
  const offsetBottom = elemRect.bottom;

  let visible = false;
  if (offsetTop > 0 && offsetTop < bodyHeight) visible = true;
  if (offsetBottom > 0 && offsetBottom < bodyHeight) visible = true;

  return visible;
};

export const setPreviewSize = (): void => {
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
export const windowResize = (): void => {
  setPreviewSize();
};
export const toggleBodyNoScroll = (value: boolean): null => {
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
export const setTrailingZeros = (num: number, size: number): string => {
  const stringNum = `${num}`;
  return stringNum.padStart(size, '0');
};
export const convertDegToRad = (degrees: number): number => (degrees * Math.PI) / 180;
