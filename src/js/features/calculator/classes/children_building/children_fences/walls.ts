import { Fences } from '../fences';
import { CALC_FENSES, CALC_PRICE_LIST_NAMES } from '../../../constants/calc-constants-general';
import Windows from '../children_openings/windows';
import { PRICE_WALL_FENCES } from '../../../constants/calc-constants-prices';

class Walls extends Fences {
  private readonly priceTent: number;

  private readonly priceProfnastil: number;

  private readonly priceSandwich: number;

  constructor() {
    super();
    this.priceTent = PRICE_WALL_FENCES.priceTent;
    this.priceProfnastil = PRICE_WALL_FENCES.priceProfnastil;
    this.priceSandwich = PRICE_WALL_FENCES.priceSandwich;
  }

  posMaterialName = CALC_PRICE_LIST_NAMES.wall;

  posMountingName = CALC_PRICE_LIST_NAMES.wallMounting;

  posMountingDescription = 'Бригада поставщика';

  get areaBox(): number {
    return this.archType === 0
      ? this.height * this.length + (this.height + this.gableHeight) * this.length
      : this.height * this.length * 2;
  }

  get areaBrutto(): number {
    const walls = this.areaBox;
    const butts = this.buttArea * 2;
    const area = walls + butts;
    return Math.round(area);
  }

  get areaNetto(): number {
    const windows = new Windows();
    return this.areaBrutto - windows.area;
  }

  get taxMaterial(): number {
    const tax = this.taxDigit;
    return tax + 1;
  }

  get taxMounting(): number {
    const tax = this.taxPaper;
    return tax + 1;
  }

  get costMaterial(): number {
    let additionsCoeff: number;
    let price: number;
    let taxes: number;
    switch (this.fences) {
      case 0: {
        additionsCoeff = this.additionsTent + 1;
        price = this.priceTent;
        taxes = this.taxesTent;
        break;
      }
      case 1: {
        additionsCoeff = this.additionsProfnastil + 1;
        price = this.priceProfnastil;
        taxes = this.taxesProfnastil;
        break;
      }
      case 2: {
        additionsCoeff = this.additionsSandwich + 1;
        price = this.priceSandwich;
        taxes = this.taxesSandwich;
        break;
      }
      default:
        break;
    }

    const factoryCost = Math.ceil(this.areaNetto * price * additionsCoeff);
    const cost = factoryCost * taxes * this.taxMaterial;
    return Math.ceil(cost);
  }

  get descriptionMaterial(): string {
    const fensesName = CALC_FENSES.find((it) => it.id === this.fences).name;
    return `${fensesName}, ${this.areaNetto.toLocaleString(undefined)} кв.м`;
  }

  get costMounting(): number {
    let price = 0;
    switch (this.fences) {
      case 0: {
        price = this.mountingTent;
        break;
      }
      case 1: {
        price = this.mountingProfnastil;
        break;
      }
      case 2: {
        price = this.mountingSandwich;
        break;
      }
      default:
        break;
    }
    return Math.ceil(this.areaNetto * price * this.taxesMounting * this.taxMounting);
  }
}

export default Walls;
