import store from '../../../../../store/store';
import { CALC_FOUNDATION, CALC_PRICE_LIST_NAMES } from '../../constants/calc-constants-general';
import Building from '../building';
import { TAX_FOUNDATION } from '../../constants/calc-constants-taxes';
import { PRICE_FOUNDATION } from '../../constants/calc-constants-prices';

class Foundation extends Building {
  private readonly foundation: number;

  private readonly taxes: number;

  constructor() {
    super();
    this.foundation = store.getState().building.foundation;
    this.taxes = TAX_FOUNDATION;
  }

  get concreteVolume(): number {
    let volume: number;
    switch (this.foundation) {
      case CALC_FOUNDATION[2].id: {
        volume = this.buildingPerimeter * CALC_FOUNDATION[2].sectionArea;
        break;
      }
      case CALC_FOUNDATION[3].id: {
        volume = this.buildingPerimeter * CALC_FOUNDATION[3].sectionArea;
        break;
      }
      case CALC_FOUNDATION[4].id: {
        volume = this.buildingArea * CALC_FOUNDATION[4].thickness;
        break;
      }
      default:
        volume = 0;
        break;
    }
    return Number(volume.toFixed(3));
  }

  posName = CALC_PRICE_LIST_NAMES.foundation;

  get description(): string {
    return CALC_FOUNDATION.find((it) => it.id === this.foundation).name;
  }

  get tax(): number {
    const tax = (this.taxDigit + this.taxPaper) / 2;
    return tax + 1;
  }

  get cost(): number {
    const index = CALC_FOUNDATION.findIndex((it) => it.id === this.foundation);
    const pileCount = this.steelPileCount;
    const { concreteVolume } = this;
    let costBrutto: number;
    switch (index) {
      case 0:
        costBrutto = 0;
        break;
      case 1:
        costBrutto = PRICE_FOUNDATION[1].price * pileCount;
        break;
      case 2:
        costBrutto = PRICE_FOUNDATION[1].price * pileCount + PRICE_FOUNDATION[2].price * concreteVolume;
        break;
      default:
        costBrutto = PRICE_FOUNDATION[index].price * concreteVolume;
        break;
    }
    return Math.ceil(costBrutto * this.taxes * this.taxDigit * this.tax);
  }
}

export default Foundation;
