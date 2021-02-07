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

  get areaRoof(): number {
    let roofArea: number;
    switch (this.datas.archType) {
      case 0:
        roofArea = (this.slopeLenght + this.datas.roofCorniceLength) * this.datas.length;
        break;
      case 1:
        roofArea = (this.slopeLenght + this.datas.roofCorniceLength) * this.datas.length * 2;
        break;
      case 2:
        roofArea = this.slopeLenght * this.datas.length * 4 + this.datas.roofCorniceLength * this.datas.length * 2;
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
    return Math.ceil(
      this.areaRoof *
        this.datas.fencesAdditions *
        this.datas.roofPriceMaterial *
        this.datas.fencesTax *
        this.taxMaterial,
    );
  }

  get descriptionMaterial(): string {
    return `${this.datas.fencesDescription}, ${Math.ceil(this.areaRoof * this.datas.fencesAdditions).toLocaleString(
      undefined,
    )} кв.м`;
  }

  get costMounting(): number {
    return Math.ceil(this.areaRoof * this.datas.fencesPriceMounting * this.datas.fencesTaxMounting * this.taxMounting);
  }

  nameMaterial = this.datas.roofMaterialPosName;

  nameMounting = this.datas.roofMountingPosName;

  descriptionMounting = this.datas.fencesDescriptionMounting;
}

export default Roof;
