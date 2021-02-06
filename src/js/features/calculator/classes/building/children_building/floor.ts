import Building from '../building';

class Floor extends Building {
  get area(): number {
    return this.buildingArea;
  }

  posName = this.datas.floorPosText;

  get description(): string {
    return `${this.datas.floorDescription}, ${this.area.toLocaleString(undefined)}кв.м`;
  }

  get tax(): number {
    const tax = (this.datas.taxDigit + this.datas.taxPaper) / 2;
    return tax + 1;
  }

  get cost(): number {
    return Math.ceil(this.area * this.datas.floorPrice * this.datas.floorTax * this.tax);
  }
}

export default Floor;
