import Windows from './children_openings/windows';
import Building from '../building';

class Walls extends Building {
  posMaterialName = this.datas.wallMaterialPosName;

  posMountingName = this.datas.wallMountingPosName;

  posMountingDescription = this.datas.fencesDescriptionMounting;

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
    return Math.ceil(
      this.areaNetto *
        this.datas.wallPriceMaterial *
        this.datas.fencesAdditions *
        this.datas.fencesTax *
        this.taxMaterial,
    );
  }

  get descriptionMaterial(): string {
    return `${this.datas.fencesDescription}, ${(this.areaNetto * this.datas.fencesAdditions).toLocaleString(
      undefined,
    )} кв.м`;
  }

  get costMounting(): number {
    return Math.ceil(this.areaNetto * this.datas.fencesPriceMounting * this.datas.fencesTaxMounting * this.taxMounting);
  }
}

export default Walls;
