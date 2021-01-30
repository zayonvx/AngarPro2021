import { createStore } from 'redux';
import rootReducer from './root-reducer';

/* eslint-disable @typescript-eslint/no-unsafe-call */
const store = createStore(
  rootReducer,
  /* @ts-ignore */
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? /* @ts-ignore */
    window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f,
);
/* eslint-enable */
export default store;
