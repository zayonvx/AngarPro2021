import Building from './building';
import { taxFactoryFenses, taxMountingFenses } from '../constants/calc-constants-taxes';
import { CALC_COEFFS } from '../constants/calc-constants-general';
import { pricesFensesMounting } from '../constants/calc-constants-prices';

export class Fences extends Building {
  protected readonly taxesTent: number;

  protected readonly taxesProfnastil: number;

  protected readonly taxesSandwich: number;

  protected readonly additionsTent: number;

  protected readonly additionsProfnastil: number;

  protected readonly additionsSandwich: number;

  protected readonly taxesMounting: number;

  protected readonly mountingTent: number;

  protected readonly mountingProfnastil: number;

  protected readonly mountingSandwich: number;

  constructor() {
    super();
    this.taxesTent = taxFactoryFenses.taxTent;
    this.taxesProfnastil = taxFactoryFenses.taxesProfnastil;
    this.taxesSandwich = taxFactoryFenses.taxesSandwich;
    this.additionsTent = CALC_COEFFS.additionsTent;
    this.additionsProfnastil = CALC_COEFFS.additionsProfnastil;
    this.additionsSandwich = CALC_COEFFS.additionsSandwich;
    this.taxesMounting = taxMountingFenses;
    this.mountingTent = pricesFensesMounting.priceTent;
    this.mountingProfnastil = pricesFensesMounting.priceProfnastil;
    this.mountingSandwich = pricesFensesMounting.priceSandwich;
  }
}

export default Fences;
