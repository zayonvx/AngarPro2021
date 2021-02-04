import { CALC_DOORS, CALC_PRICE_LIST_NAMES } from '../constants/calc-constants-general';
import { pricesDoors } from '../constants/calc-constants-prices';
import Openings from './openings';
import store from '../../../../store/store';

class Doors extends Openings {
  private readonly type: number;

  private readonly count: number;

  private readonly priceNone: number;

  private readonly pricePVC: number;

  private readonly priceSteel: number;

  private readonly textNone: string;

  private readonly textPVC: string;

  private readonly textSteel: string;

  constructor() {
    super();
    this.type = store.getState().building.doorsType;
    this.count = store.getState().building.doorsCount;
    this.priceNone = pricesDoors.none;
    this.pricePVC = pricesDoors.PVC;
    this.priceSteel = pricesDoors.steel;
    this.textNone = CALC_DOORS.types[0].name;
    this.textPVC = CALC_DOORS.types[1].name;
    this.textSteel = CALC_DOORS.types[2].name;
  }

  posName = CALC_PRICE_LIST_NAMES.doors;

  get description(): string {
    let text = '';
    switch (this.type) {
      case 0:
        text = this.textNone;
        break;
      case 1:
        text = `${this.textPVC}, ${this.count}шт.`;
        break;
      case 2:
        text = `${this.textSteel}, ${this.count}шт.`;
        break;
      default:
        break;
    }
    return text;
  }

  get cost(): number {
    let price = 0;
    switch (this.type) {
      case 0:
        price = this.priceNone;
        break;
      case 1:
        price = this.pricePVC;
        break;
      case 2:
        price = this.priceSteel;
        break;
      default:
        break;
    }

    const factoryCostDoors = Math.ceil(this.count * price);
    const cost = factoryCostDoors * this.taxesValue;
    return Math.ceil(cost);
  }
}

export default Doors;
