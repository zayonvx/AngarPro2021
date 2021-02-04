import Building from './building';
import { taxFactoryFenses, taxMountingFenses } from '../constants/calc-constants-taxes';
import { CALC_COEFFS } from '../constants/calc-constants-general';

export class Fences extends Building {
  protected readonly taxesTent: number;

  protected readonly taxesProfnastil: number;

  protected readonly taxesSandwich: number;

  protected readonly additionsTent: number;

  protected readonly additionsProfnastil: number;

  protected readonly additionsSandwich: number;

  protected readonly taxesMounting: number;

  constructor() {
    super();
    this.taxesTent = taxFactoryFenses.taxTent;
    this.taxesProfnastil = taxFactoryFenses.taxesProfnastil;
    this.taxesSandwich = taxFactoryFenses.taxesSandwich;
    this.additionsTent = CALC_COEFFS.additionsTent;
    this.additionsProfnastil = CALC_COEFFS.additionsProfnastil;
    this.additionsSandwich = CALC_COEFFS.additionsSandwich;
    this.taxesMounting = taxMountingFenses;
  }
}

export default Fences;
