import { ICalculatorState } from './types';

const initialState: ICalculatorState = {
  calculator: {
    visible: false,
    currentPage: 0,
    buttonBackVisible: false,
    buttonForwardVisible: true,
    children: null,
  },
};

export default initialState;
