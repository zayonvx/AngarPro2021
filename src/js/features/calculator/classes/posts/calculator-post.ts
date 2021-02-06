import Building from '../building/building';
import { calculatorUrlPHP } from '../../../../utils/const';

class CalculatorPost {
  private building: Building;

  constructor() {
    this.building = new Building();
  }

  private get sizes() {
    return `${this.building.datas.width} x ${this.building.datas.length} x ${this.building.datas.height}`;
  }

  private get gatesDatas() {
    return this.building.datas.gatesCount > 0
      ? `${this.building.datas.gatesDescriptionNameText}, ${this.building.datas.gatesWidth} x ${this.building.datas.gatesHeight} - ${this.building.datas.gatesCount}шт.`
      : '-,';
  }

  private get doorsDatas() {
    return this.building.datas.doorsCount > 0
      ? `${this.building.datas.doorsDescription}, ${this.building.datas.doorsCount}шт.`
      : '-,';
  }

  private get windowsDatas() {
    return this.building.datas.windowsRows > 0 ? `${this.building.datas.windowsDescription}.` : '-.';
  }

  private createDatasForSend() {
    const date = new Date();
    const time = date.toLocaleString('ru');
    const description = `${this.building.datas.regionName}, ${this.building.datas.archTypeName.toLowerCase()}, ${
      this.sizes
    }, ${this.building.datas.fencesDescription.toLowerCase()}`;
    const concrete = `Фундамент: ${this.building.datas.foundationDescription.toLowerCase()}. Пол: ${this.building.datas.floorDescription.toLowerCase()}`;
    const options = `Ворота: ${this.gatesDatas.toLowerCase()} Двери: ${this.doorsDatas.toLowerCase()} Окна: ${this.windowsDatas.toLowerCase()}`;

    return { time, description, concrete, options };
  }

  postXHR(): void {
    const data = this.createDatasForSend();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', calculatorUrlPHP, true);
    const post = JSON.stringify(data);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(post);
  }
}

export default CalculatorPost;
