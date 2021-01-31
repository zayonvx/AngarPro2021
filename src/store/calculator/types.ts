export const CALCULATOR_TOGGLE_VISIBLE = 'CALCULATOR_TOGGLE_VISIBLE';
export const CALCULATOR_CHANGE_PAGE = 'CALCULATOR_CHANGE_PAGE';
export const CALCULATOR_TOGGLE_BACK_VISIBLE = 'CALCULATOR_TOGGLE_BACK_VISIBLE';
export const CALCULATOR_TOGGLE_FORWARD_VISIBLE = 'CALCULATOR_TOGGLE_FORWARD_VISIBLE';

export interface CalculatorState {
  visible: boolean;
  currentPage: number;
  buttonBackVisible: boolean;
  buttonForwardVisible: boolean;
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

export type CalculatorActionsCreators =
  | CalculatorToggleVisible
  | CalculatorChangePage
  | CalculatorToggleBackVisible
  | CalculatorToggleForwardVisible;
