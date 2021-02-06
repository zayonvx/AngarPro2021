import Openings from '../openings';

class Windows extends Openings {
  posName = this.datas.windowsPosNameText;

  get area(): number {
    const longRowsArea =
      (this.datas.length - this.datas.windowsHeight) * this.datas.windowsRows * this.datas.windowHorizontalGap;
    const shortRowsArea =
      (this.datas.width - this.datas.windowsHeight) * this.datas.windowsRows * this.datas.windowHorizontalGap;
    const area = (longRowsArea + shortRowsArea) * 2;
    return Number(area.toFixed(3));
  }

  get tax(): number {
    const tax = (this.datas.taxDigit + this.datas.taxPaper) / 2;
    return tax + 1;
  }

  get description(): string {
    return this.area === 0 ? 'Нет' : `ПВХ-профиль, ${Math.ceil(this.area)}кв.м`;
  }

  get cost(): number {
    const cost = Math.ceil(this.area * this.datas.windowsPrices) * this.taxesValue * this.tax;
    return Math.ceil(cost);
  }
}

export default Windows;
