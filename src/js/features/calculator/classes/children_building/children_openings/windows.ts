import { CALC_PRICE_LIST_NAMES, CALC_WINDOW_PARAMS } from '../../../constants/calc-constants-general';
import Openings from '../openings';
import { PRICE_WINDOWS } from '../../../constants/calc-constants-prices';

class Windows extends Openings {
  private readonly windowHeight: number;

  private readonly windowHorizontalGap: number;

  private readonly prices: number;

  constructor() {
    super();
    this.windowHeight = CALC_WINDOW_PARAMS.windowHeight;
    this.windowHorizontalGap = CALC_WINDOW_PARAMS.windowHorizontalGap;
    this.prices = PRICE_WINDOWS;
  }

  posName = CALC_PRICE_LIST_NAMES.windows;

  get area(): number {
    const longRowsArea = (this.length - this.windowHeight * 2) * this.windowRows * 2 * this.windowHorizontalGap;
    const shortRowsArea = (this.width - this.windowHeight * 2) * this.windowRows * 2 * this.windowHorizontalGap;
    const area = longRowsArea + shortRowsArea;
    return Number(area.toFixed(3));
  }

  get tax(): number {
    const tax = (this.taxDigit + this.taxPaper) / 2;
    return tax + 1;
  }

  get description(): string {
    return this.area === 0 ? 'Нет' : `ПВХ-профиль, ${Math.ceil(this.area)}кв.м`;
  }

  get cost(): number {
    const cost = Math.ceil(this.area * this.prices) * this.taxesValue * this.tax;
    return Math.ceil(cost);
  }
}

export default Windows;
