import { CALC_GATES, CALC_PRICE_LIST_NAMES } from '../constants/calc-constants-general';
import { pricesGates } from '../constants/calc-constants-prices';
import Openings from './openings';
import store from '../../../../store/store';

class Gates extends Openings {
  private readonly type: number;

  private readonly count: number;

  private readonly gatesWidth: number;

  private readonly gatesHeight: number;

  constructor() {
    super();
    this.type = store.getState().building.gatesType;
    this.gatesWidth = store.getState().building.gatesWidth;
    this.gatesHeight = store.getState().building.gatesHeight;
    this.count = store.getState().building.gatesCount;
  }

  get areaGates(): number {
    return this.gatesHeight * this.gatesWidth * this.count;
  }

  posName = CALC_PRICE_LIST_NAMES.gates;

  get description(): string {
    const gatesName = CALC_GATES.types.find((it) => it.id === this.type).name;
    const gatesSizesText = `, ${this.gatesWidth}x${this.gatesHeight}м`;
    const gatesCountText = this.type === CALC_GATES.types[0].id ? '' : `${gatesSizesText}, ${this.count}шт.`;
    return gatesName + gatesCountText;
  }

  get cost(): number {
    const gatesPrice = pricesGates.find((it) => it.id === this.type).price;
    return Math.ceil(this.areaGates * gatesPrice * this.taxesValue);
  }
}

export default Gates;
