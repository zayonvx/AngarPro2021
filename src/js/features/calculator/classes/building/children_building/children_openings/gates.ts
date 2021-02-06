import Openings from '../openings';

class Gates extends Openings {
  get areaGates(): number {
    return this.datas.gatesHeight * this.datas.gatesWidth * this.datas.gatesCount;
  }

  // TODO add logic for mixin gates and fences
  get tax(): number {
    const tax = (this.datas.taxDigit + this.datas.taxPaper) / 2;
    return tax + 1;
  }

  posName = this.datas.gatesPosNameText;

  get description(): string {
    const gatesSizesText = `, ${this.datas.gatesWidth}x${this.datas.gatesHeight}м`;
    const gatesCountText = this.datas.gatesType === 0 ? '' : `${gatesSizesText}, ${this.datas.gatesCount}шт.`;
    return this.datas.gatesDescriptionNameText + gatesCountText;
  }

  get cost(): number {
    return Math.ceil(this.areaGates * this.datas.gatesPrice * this.taxesValue * this.tax);
  }
}

export default Gates;
