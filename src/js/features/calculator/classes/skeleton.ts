import Building from './building';
import { taxFactorySkeleton, taxMountingSkeleton } from '../constants/calc-constants-taxes';
import { priceBolts, priceSkeletonMetal, priceSkeletonMounting } from '../constants/calc-constants-prices';
import { CALC_COEFFS, CALC_PRICE_LIST_NAMES } from '../constants/calc-constants-general';

class Skeleton extends Building {
  private readonly taxesMaterial: number;

  private readonly priceMaterial: number;

  private readonly priceBolts: number;

  private readonly boltCoeff: number;

  private readonly priceMounting: number;

  private readonly taxesMounting: number;

  constructor() {
    super();
    this.taxesMaterial = taxFactorySkeleton;
    this.priceMaterial = priceSkeletonMetal;
    this.priceBolts = priceBolts;
    this.boltCoeff = CALC_COEFFS.bolts;
    this.priceMounting = priceSkeletonMounting;
    this.taxesMounting = taxMountingSkeleton;
  }

  nameMaterial = CALC_PRICE_LIST_NAMES.skeleton;

  get descriptionMaterial(): string {
    const skeletonWeight = this.skeletonWeight / 1000;
    return `Стальной, окрашенный - ${skeletonWeight.toFixed(1)} т.`;
  }

  get costMaterial(): number {
    const weight = this.skeletonWeight;
    const boltsCost = Math.ceil(weight * this.boltCoeff * this.priceBolts);
    const factoryCost = Math.ceil(weight * this.priceMaterial + boltsCost);
    return Math.ceil(factoryCost * this.taxesMaterial);
  }

  nameMounting = CALC_PRICE_LIST_NAMES.skeletonMounting;

  descriptionMounting = 'Бригада поставщика';

  get costMounting(): number {
    const factoryCost = this.skeletonWeight * this.priceMounting;
    const cost = factoryCost * this.taxesMounting;
    return Math.ceil(cost);
  }
}

export default Skeleton;
