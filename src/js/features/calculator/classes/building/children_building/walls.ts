import Windows from './children_openings/windows';
import Building from '../building';

class Walls extends Building {
  posMaterialName = this.datas.wallMaterialPosName;

  posMountingName = this.datas.wallMountingPosName;

  posMountingDescription = 'Бригада поставщика';

  get areaBox(): number {
    return this.datas.archType === 0
      ? this.datas.height * this.datas.length + (this.datas.height + this.gableHeight) * this.datas.length
      : this.datas.height * this.datas.length * 2;
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
    const tax = this.datas.taxDigit;
    return tax + 1;
  }

  get taxMounting(): number {
    const tax = this.datas.taxPaper;
    return tax + 1;
  }

  get costMaterial(): number {
    let additionsCoeff: number;
    let price: number;
    let taxes: number;
    switch (this.datas.fences) {
      case 0: {
        additionsCoeff = this.datas.fencesAdditionsTent + 1;
        price = this.datas.wallPriceTent;
        taxes = this.datas.fencesTaxTent;
        break;
      }
      case 1: {
        additionsCoeff = this.datas.fencesAdditionsProfnastil + 1;
        price = this.datas.wallPriceProfnastil;
        taxes = this.datas.fencesTaxProfnastil;
        break;
      }
      case 2: {
        additionsCoeff = this.datas.fencesAdditionsSandwich + 1;
        price = this.datas.wallPriceSandwich;
        taxes = this.datas.fencesTaxSandwich;
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
    let fensesName = '';
    switch (this.datas.fences) {
      case 0: {
        fensesName = this.datas.fencesTentDescriptionText;
        break;
      }
      case 1: {
        fensesName = this.datas.fencesProfnastilDescriptionText;
        break;
      }
      case 2: {
        fensesName = this.datas.fencesSandwichDescriptionText;
        break;
      }
      default:
        break;
    }
    return `${fensesName}, ${this.areaNetto.toLocaleString(undefined)} кв.м`;
  }

  get costMounting(): number {
    let price = 0;
    switch (this.datas.fences) {
      case 0: {
        price = this.datas.fencesPriceMountingTent;
        break;
      }
      case 1: {
        price = this.datas.fencesPriceMountingProfnastil;
        break;
      }
      case 2: {
        price = this.datas.fencesPriceMountingSandwich;
        break;
      }
      default:
        break;
    }
    return Math.ceil(this.areaNetto * price * this.datas.fencesTaxMounting * this.taxMounting);
  }
}

export default Walls;
