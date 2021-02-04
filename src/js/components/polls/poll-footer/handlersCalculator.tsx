import React from 'react';
import store from '../../../../store/store';
import { sendCalcPageLayout, setBackButtonVisible, setForwardButtonVisible } from './_functions';
import CalcPage002 from '../calculator/calc-pages/page002';
import CalcPage003 from '../calculator/calc-pages/page003';
import CalcPage004 from '../calculator/calc-pages/page004';
import CalcPage001 from '../calculator/calc-pages/page001';
import { calculatorChangePage } from '../../../../store/calculator/actions';

export const calculatorForwardPage = (): void => {
  const { currentPage } = store.getState().calculator;
  let newPage = 0;
  switch (currentPage) {
    case 1:
      newPage = 2;
      setBackButtonVisible(true);
      sendCalcPageLayout(<CalcPage002 />);
      break;
    case 2:
      newPage = 3;
      sendCalcPageLayout(<CalcPage003 />);
      break;
    case 3:
      newPage = 4;
      sendCalcPageLayout(<CalcPage004 />);
      setForwardButtonVisible(false);
      break;
    default:
      break;
  }
  store.dispatch(calculatorChangePage(newPage));
};
export const calculatorBackwardPage = (): void => {
  const { currentPage } = store.getState().calculator;
  let newPage = 0;
  switch (currentPage) {
    case 2:
      newPage = 1;
      setBackButtonVisible(false);
      sendCalcPageLayout(<CalcPage001 />);
      break;
    case 3:
      newPage = 2;
      sendCalcPageLayout(<CalcPage002 />);
      break;
    case 4:
      newPage = 3;
      sendCalcPageLayout(<CalcPage003 />);
      setForwardButtonVisible(true);
      break;
    default:
      break;
  }
  store.dispatch(calculatorChangePage(newPage));
};
// export const calculatorPreparePost = (): ICalculator => {
//     const type = quizPostConst.fences.types[store.getState().building.fences];
//     const warming = quizPostConst.tent.heat[store.getState().building.tentType];
//     const sandwich = quizPostConst.sandwich.types[store.getState().building.sandwichType];
//
//     return {
//         type,
//         warming,
//         sandwich,
//         site: store.getState().building.regionStr,
//         name: store.getState().quiz.name,
//         email: store.getState().quiz.mail,
//         phone: store.getState().quiz.tel,
//         span: 'не определено',
//         craneHeight: 0,
//         cranePower: 0,
//         width: store.getState().building.width,
//         length: store.getState().building.length,
//         height: store.getState().building.height,
//     };
// };
