import { convertDegToRad } from '../../../../../utils/functions';
import Building from '../building';

class Roof extends Building {
  get slopeLenght(): number {
    let lengthSlope: number;
    switch (this.datas.archType) {
      case 0:
        lengthSlope = this.datas.width / Math.cos(convertDegToRad(this.datas.angleRoof));
        break;
      case 1:
        lengthSlope = this.datas.width / 2 / Math.cos(convertDegToRad(this.datas.angleRoof));
        break;
      case 2:
        lengthSlope = this.datas.width / 4 / Math.cos(convertDegToRad(this.datas.angleRoof));
        break;
      default:
        lengthSlope = 0;
        break;
    }
    return Number(lengthSlope.toFixed(3));
  }

  get area(): number {
    let corniceLenght: number;
    switch (this.datas.fences) {
      case 0:
        corniceLenght = this.datas.roofCorniceTent;
        break;
      case 1:
        corniceLenght = this.datas.roofCorniceProfnastil;
        break;
      case 2:
        corniceLenght = this.datas.roofCorniceSandwich;
        break;
      default:
        corniceLenght = 0;
        break;
    }

    let roofArea: number;
    switch (this.datas.archType) {
      case 0:
        roofArea = (this.slopeLenght + corniceLenght) * this.datas.length;
        break;
      case 1:
        roofArea = (this.slopeLenght + corniceLenght) * this.datas.length * 2;
        break;
      case 2:
        roofArea = this.slopeLenght * this.datas.length * 4 + corniceLenght * this.datas.length * 2;
        break;
      default:
        roofArea = 0;
        break;
    }

    return Number(roofArea.toFixed(3));
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
        price = this.datas.roofPriceTent;
        taxes = this.datas.fencesTaxTent;
        break;
      }
      case 1: {
        additionsCoeff = this.datas.fencesAdditionsProfnastil + 1;
        price = this.datas.roofPriceProfnastil;
        taxes = this.datas.fencesTaxProfnastil;
        break;
      }
      case 2: {
        additionsCoeff = this.datas.fencesAdditionsSandwich + 1;
        price = this.datas.roofPriceSandwich;
        taxes = this.datas.fencesTaxSandwich;
        break;
      }
      default:
        break;
    }

    const factoryCost = this.area * additionsCoeff * price;
    return Math.ceil(factoryCost * taxes * this.taxMaterial);
  }

  // TODO coeffs for decriptions
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
    return `${fensesName}, ${Math.ceil(this.area).toLocaleString(undefined)} кв.м`;
  }

  get costMounting(): number {
    let price: number;
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
    return Math.ceil(this.area * price * this.datas.fencesTaxMounting * this.taxMounting);
  }

  nameMaterial = this.datas.roofMaterialPosName;

  nameMounting = this.datas.roofMountingPosName;

  descriptionMounting = 'Бригада поставщика';
}

export default Roof;
