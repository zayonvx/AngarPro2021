import { Fences } from '../fences';
import { CALC_CORNICE, CALC_FENSES, CALC_PRICE_LIST_NAMES } from '../../../constants/calc-constants-general';
import { convertDegToRad } from '../../../../../utils/functions';
import { PRICE_ROOF_FENCES } from '../../../constants/calc-constants-prices';

class Roof extends Fences {
  private readonly priceTent: number;

  private readonly priceProfnastil: number;

  private readonly priceSandwich: number;

  private readonly corniceTent: number;

  private readonly corniceProfnastil: number;

  private readonly corniceSandwich: number;

  constructor() {
    super();
    this.priceTent = PRICE_ROOF_FENCES.priceTent;
    this.priceProfnastil = PRICE_ROOF_FENCES.priceProfnastil;
    this.priceSandwich = PRICE_ROOF_FENCES.priceSandwich;
    this.corniceTent = CALC_CORNICE.tent;
    this.corniceProfnastil = CALC_CORNICE.profnastil;
    this.corniceSandwich = CALC_CORNICE.sandwich;
  }

  get slopeLenght(): number {
    let lengthSlope: number;
    switch (this.archType) {
      case 0:
        lengthSlope = this.width / Math.cos(convertDegToRad(this.angle));
        break;
      case 1:
        lengthSlope = this.width / 2 / Math.cos(convertDegToRad(this.angle));
        break;
      case 2:
        lengthSlope = this.width / 4 / Math.cos(convertDegToRad(this.angle));
        break;
      default:
        lengthSlope = 0;
        break;
    }
    return Number(lengthSlope.toFixed(3));
  }

  get area(): number {
    let corniceLenght: number;
    switch (this.fences) {
      case CALC_FENSES[0].id:
        corniceLenght = this.corniceTent;
        break;
      case CALC_FENSES[1].id:
        corniceLenght = this.corniceProfnastil;
        break;
      case CALC_FENSES[2].id:
        corniceLenght = this.corniceSandwich;
        break;
      default:
        corniceLenght = 0;
        break;
    }

    let roofArea: number;
    switch (this.archType) {
      case 0:
        roofArea = (this.slopeLenght + corniceLenght) * this.length;
        break;
      case 1:
        roofArea = (this.slopeLenght + corniceLenght) * this.length * 2;
        break;
      case 2:
        roofArea = this.slopeLenght * this.length * 4 + corniceLenght * this.length * 2;
        break;
      default:
        roofArea = 0;
        break;
    }

    return Number(roofArea.toFixed(3));
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

    const factoryCost = Math.ceil(this.area * price * additionsCoeff);
    const cost = factoryCost * taxes * this.taxMaterial;
    return Math.ceil(cost);
  }

  nameMaterial = CALC_PRICE_LIST_NAMES.roof;

  get descriptionMaterial(): string {
    const fensesName = CALC_FENSES.find((it) => it.id === this.fences).name;
    return `${fensesName}, ${this.area.toLocaleString(undefined)} кв.м`;
  }

  get costMounting(): number {
    let price: number;
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
    return Math.ceil(this.area * price * this.taxesMounting * this.taxMounting);
  }

  nameMounting = CALC_PRICE_LIST_NAMES.roofMounting;

  descriptionMounting = 'Бригада поставщика';
}

export default Roof;
