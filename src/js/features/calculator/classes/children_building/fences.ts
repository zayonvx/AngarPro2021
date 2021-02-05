import Building from '../building';
import { CALC_COEFFS } from '../../constants/calc-constants-general';
import { TAX_FACTORY_FENCES, TAX_MOUNTING_FENCES } from '../../constants/calc-constants-taxes';
import { PRICE_FENCES_MOUNTING } from '../../constants/calc-constants-prices';

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
    this.taxesTent = TAX_FACTORY_FENCES.taxTent;
    this.taxesProfnastil = TAX_FACTORY_FENCES.taxesProfnastil;
    this.taxesSandwich = TAX_FACTORY_FENCES.taxesSandwich;
    this.additionsTent = CALC_COEFFS.additionsTent;
    this.additionsProfnastil = CALC_COEFFS.additionsProfnastil;
    this.additionsSandwich = CALC_COEFFS.additionsSandwich;
    this.taxesMounting = TAX_MOUNTING_FENCES;
    this.mountingTent = PRICE_FENCES_MOUNTING.priceTent;
    this.mountingProfnastil = PRICE_FENCES_MOUNTING.priceProfnastil;
    this.mountingSandwich = PRICE_FENCES_MOUNTING.priceSandwich;
  }
}

export default Fences;
