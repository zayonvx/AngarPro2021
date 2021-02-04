import { combineReducers } from 'redux';
import sliderRedusers from './slider/reducers';
import previewRedusers from './preview/reducers';
import popupRedusers from './popup/reducers';
import galleryRedusers from './gallery/reducers';
import quizRedusers from './quiz/reducers';
import calculatorRedusers from './calculator/reducers';
import buildingRedusers from './building/reducers';
import loadedRedusers from './loaded/reducers';

export default combineReducers({
  slider: sliderRedusers,
  preview: previewRedusers,
  popup: popupRedusers,
  gallery: galleryRedusers,
  quiz: quizRedusers,
  calculator: calculatorRedusers,
  building: buildingRedusers,
  loaded: loadedRedusers,
});
