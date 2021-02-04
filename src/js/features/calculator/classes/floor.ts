import { CALC_FLOOR, CALC_PRICE_LIST_NAMES } from '../constants/calc-constants-general';
import store from '../../../../store/store';
import Building from './building';
import { pricesFloor } from '../constants/calc-constants-prices';
import { taxFloor } from '../constants/calc-constants-taxes';

class Floor extends Building {
  private readonly type: number;

  private readonly textNone: string;

  private readonly text100: string;

  private readonly text150: string;

  private readonly text200: string;

  private readonly priceNone: number;

  private readonly price100: number;

  private readonly price150: number;

  private readonly price200: number;

  private readonly taxes: number;

  constructor() {
    super();
    this.type = store.getState().building.floor;
    this.textNone = CALC_FLOOR.type[0].name;
    this.text100 = CALC_FLOOR.type[1].name;
    this.text150 = CALC_FLOOR.type[2].name;
    this.text200 = CALC_FLOOR.type[3].name;
    this.priceNone = pricesFloor[0].price;
    this.price100 = pricesFloor[1].price;
    this.price150 = pricesFloor[2].price;
    this.price200 = pricesFloor[3].price;
    this.taxes = taxFloor;
  }

  get area(): number {
    return this.buildingArea;
  }

  posName = CALC_PRICE_LIST_NAMES.floor;

  get description(): string {
    let text = '';
    switch (this.type) {
      case 0:
        text = this.textNone;
        break;
      case 1:
        text = `${this.text100}, ${this.area.toLocaleString(undefined)}кв.м`;
        break;
      case 2:
        text = `${this.text150}, ${this.area.toLocaleString(undefined)}кв.м`;
        break;
      case 3:
        text = `${this.text200}, ${this.area.toLocaleString(undefined)}кв.м`;
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
        price = this.price100;
        break;
      case 2:
        price = this.price150;
        break;
      case 3:
        price = this.price200;
        break;
      default:
        break;
    }
    return Math.ceil(this.area * price * this.taxes);
  }
}

export default Floor;
