import {
  CALCULATOR_CHANGE_PAGE,
  CALCULATOR_TOGGLE_BACK_VISIBLE,
  CALCULATOR_TOGGLE_FORWARD_VISIBLE,
  CALCULATOR_TOGGLE_VISIBLE,
  CalculatorActionsCreators,
} from './types';

export const calculatorToggleVisible = (value: boolean): CalculatorActionsCreators => ({
  type: CALCULATOR_TOGGLE_VISIBLE,
  payload: value,
});

export const calculatorChangePage = (value: number): CalculatorActionsCreators => ({
  type: CALCULATOR_CHANGE_PAGE,
  payload: value,
});

export const calculatorChangeBackVisible = (value: boolean): CalculatorActionsCreators => ({
  type: CALCULATOR_TOGGLE_BACK_VISIBLE,
  payload: value,
});

export const calculatorChangeForwardVisible = (value: boolean): CalculatorActionsCreators => ({
  type: CALCULATOR_TOGGLE_FORWARD_VISIBLE,
  payload: value,
});
