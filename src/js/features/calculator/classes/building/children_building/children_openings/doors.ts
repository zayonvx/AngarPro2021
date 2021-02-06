import Openings from '../openings';

class Doors extends Openings {
  posName = this.datas.doorsPosNameText;

  get description(): string {
    return this.datas.doorsType === 0
      ? this.datas.doorsDescription
      : `${this.datas.doorsDescription}, ${this.datas.doorsCount}шт.`;
  }

  get tax(): number {
    const tax = (this.datas.taxDigit + this.datas.taxPaper) / 2;
    return tax + 1;
  }

  get cost(): number {
    const cost = this.datas.doorsPrice * this.taxesValue * this.tax;
    return Math.ceil(cost);
  }
}

export default Doors;
