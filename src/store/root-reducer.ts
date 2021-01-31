import { combineReducers } from 'redux';
import sliderRedusers from './slider/reduser';
import previewRedusers from './preview/reduser';
import loadedRedusers from './loaded/reduser';
import popupRedusers from './popup/reduser';
import galleryRedusers from './gallery/reduser';
import quizRedusers from './quiz/reduser';
import calculatorRedusers from './calculator/reduser';
import buildingRedusers from './building/reduser';

export default combineReducers({
  slider: sliderRedusers,
  preview: previewRedusers,
  loaded: loadedRedusers,
  popup: popupRedusers,
  gallery: galleryRedusers,
  quiz: quizRedusers,
  calculator: calculatorRedusers,
  building: buildingRedusers,
});
