import { combineReducers } from 'redux';
import sliderRedusers from './slider/reduser';
import previewRedusers from './preview/reduser';
import popupRedusers from './popup/reduser';
import galleryRedusers from './gallery/reduser';
import quizRedusers from './quiz/reduser';
import calculatorRedusers from './calculator/reduser';
import buildingRedusers from './building/reduser';
import loadedRedusers from './loaded/reduser';

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
