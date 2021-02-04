export const CALCULATOR_TOGGLE_VISIBLE = 'CALCULATOR_TOGGLE_VISIBLE';
export const CALCULATOR_CHANGE_PAGE = 'CALCULATOR_CHANGE_PAGE';
export const CALCULATOR_TOGGLE_BACK_VISIBLE = 'CALCULATOR_TOGGLE_BACK_VISIBLE';
export const CALCULATOR_TOGGLE_FORWARD_VISIBLE = 'CALCULATOR_TOGGLE_FORWARD_VISIBLE';
export const CALCULATOR_CHANGE_CHILDREN = 'CALCULATOR_CHANGE_CHILDREN';

export interface ICalculatorState {
  calculator: {
    visible: boolean;
    currentPage: number;
    buttonBackVisible: boolean;
    buttonForwardVisible: boolean;
    children: JSX.Element;
  };
}

interface CalculatorToggleVisible {
  type: typeof CALCULATOR_TOGGLE_VISIBLE;
  payload: boolean;
}

interface CalculatorChangePage {
  type: typeof CALCULATOR_CHANGE_PAGE;
  payload: number;
}

interface CalculatorToggleBackVisible {
  type: typeof CALCULATOR_TOGGLE_BACK_VISIBLE;
  payload: boolean;
}

interface CalculatorToggleForwardVisible {
  type: typeof CALCULATOR_TOGGLE_FORWARD_VISIBLE;
  payload: boolean;
}

interface CalculatorChangeChildren {
  type: typeof CALCULATOR_CHANGE_CHILDREN;
  payload: JSX.Element;
}

export type CalculatorActionsCreators =
  | CalculatorToggleVisible
  | CalculatorChangePage
  | CalculatorToggleBackVisible
  | CalculatorChangeChildren
  | CalculatorToggleForwardVisible;
