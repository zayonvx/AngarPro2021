import Building from '../building';

class Skeleton extends Building {
  nameMaterial = this.datas.skeletonMaterialPosNameText;

  get descriptionMaterial(): string {
    const skeletonWeight = this.skeletonWeight / 1000;
    return `Стальной, окрашенный - ${skeletonWeight.toFixed(1)} т.`;
  }

  get taxMaterial(): number {
    const tax = this.datas.taxDigit;
    return tax + 1;
  }

  get taxMounting(): number {
    const tax = this.datas.taxPaper;
    return tax + 1;
  }

  get costMaterial(): number {
    const weight = this.skeletonWeight;
    const boltsCost = Math.ceil(weight * this.datas.skeletonBoltCoeff * this.datas.skeletonPriceBolts);
    const factoryCost = Math.ceil(weight * this.datas.skeletonPriceMaterial + boltsCost);
    return Math.ceil(factoryCost * this.datas.skeletonTaxesMaterial * this.taxMaterial);
  }

  nameMounting = this.datas.skeletonMountingPosNameText;

  descriptionMounting = 'Бригада поставщика';

  get costMounting(): number {
    const factoryCost = this.skeletonWeight * this.datas.skeletonPriceMounting;
    const cost = factoryCost * this.datas.skeletonTaxesMounting * this.taxMounting;
    return Math.ceil(cost);
  }
}

export default Skeleton;
