import { combineReducers } from 'redux';
import sliderRedusers from './slider/reduser';
import previewRedusers from './preview/reduser';

export default combineReducers({
  slider: sliderRedusers,
  preview: previewRedusers,
});
