import Building from '../building';
import { CALC_COEFFS, CALC_PRICE_LIST_NAMES } from '../../constants/calc-constants-general';
import { TAX_FACTORY_SKELETON, TAX_MOUNTING_SKELETON } from '../../constants/calc-constants-taxes';
import { PRICE_BOLTS, PRICE_SKELETON_METAL, PRICE_SKELETON_MOUNTING } from '../../constants/calc-constants-prices';

class Skeleton extends Building {
  private readonly taxesMaterial: number;

  private readonly priceMaterial: number;

  private readonly priceBolts: number;

  private readonly boltCoeff: number;

  private readonly priceMounting: number;

  private readonly taxesMounting: number;

  constructor() {
    super();
    this.taxesMaterial = TAX_FACTORY_SKELETON;
    this.priceMaterial = PRICE_SKELETON_METAL;
    this.priceBolts = PRICE_BOLTS;
    this.boltCoeff = CALC_COEFFS.bolts;
    this.priceMounting = PRICE_SKELETON_MOUNTING;
    this.taxesMounting = TAX_MOUNTING_SKELETON;
  }

  nameMaterial = CALC_PRICE_LIST_NAMES.skeleton;

  get descriptionMaterial(): string {
    const skeletonWeight = this.skeletonWeight / 1000;
    return `Стальной, окрашенный - ${skeletonWeight.toFixed(1)} т.`;
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
    const weight = this.skeletonWeight;
    const boltsCost = Math.ceil(weight * this.boltCoeff * this.priceBolts);
    const factoryCost = Math.ceil(weight * this.priceMaterial + boltsCost);
    return Math.ceil(factoryCost * this.taxesMaterial * this.taxMaterial);
  }

  nameMounting = CALC_PRICE_LIST_NAMES.skeletonMounting;

  descriptionMounting = 'Бригада поставщика';

  get costMounting(): number {
    const factoryCost = this.skeletonWeight * this.priceMounting;
    const cost = factoryCost * this.taxesMounting * this.taxMounting;
    return Math.ceil(cost);
  }
}

export default Skeleton;
