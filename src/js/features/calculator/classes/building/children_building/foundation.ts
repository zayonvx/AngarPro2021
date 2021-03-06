import Building from '../building';

class Foundation extends Building {
  posName = this.datas.foundationPosText;

  get description(): string {
    return this.datas.foundationDescription;
  }

  get tax(): number {
    const tax = (this.datas.taxDigit + this.datas.taxPaper) / 2;
    return tax + 1;
  }

  get concreteVolume(): number {
    let volume = 0;
    switch (this.datas.foundationType) {
      case 2: {
        volume = this.buildingPerimeter * this.datas.foundationRostverkSectionArea;
        break;
      }
      case 3: {
        volume = this.buildingPerimeter * this.datas.foundationLineSectionArea;
        break;
      }
      case 4: {
        volume = this.buildingArea * this.datas.foundationPlateThickness;
        break;
      }
      default:
        break;
    }
    return volume;
  }

  get cost(): number {
    let cost: number;
    switch (this.datas.foundationType) {
      case 0:
        cost = this.datas.foundationPrice;
        break;
      case 1:
        cost = this.datas.foundationPilePrice * this.steelPileCount;
        break;
      case 2:
        cost = this.datas.foundationPilePrice * this.steelPileCount + this.datas.foundationPrice * this.concreteVolume;
        break;
      case 3:
        cost = this.datas.foundationPrice * this.concreteVolume;
        break;
      case 4:
        cost = this.datas.foundationPrice * this.concreteVolume;
        break;
      default:
        break;
    }
    return Math.ceil(cost * this.datas.foundationTax * this.tax);
  }
}

export default Foundation;
