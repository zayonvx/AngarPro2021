import store from '../../../../store/store';
import {
  CALC_COEFFS,
  CALC_FENSES,
  CALC_METAL_CONSUMPTION,
  CALC_PILES,
  CALC_PROFNASTIL,
  CALC_REGIONS,
  CALC_SANDWICH,
  // CALC_SNOW_WEIGHT,
  CALC_SPAN_STEP,
  CALC_TENT,
} from '../constants/calc-constants-general';
import { convertDegToRad } from '../../../utils/functions';
import { TAX_DIGIT, TAX_PAPER } from '../constants/calc-constants-taxes';

class Building {
  protected readonly width: number;

  protected readonly length: number;

  protected readonly fences: number;

  protected readonly region: number;

  protected readonly height: number;

  protected readonly windowRows: number;

  protected readonly archType: number;

  protected readonly angle: number;

  protected taxDigit: number;

  protected taxPaper: number;

  constructor() {
    this.width = store.getState().building.width;
    this.length = store.getState().building.length;
    this.height = store.getState().building.height;
    this.fences = store.getState().building.fences;
    this.region = store.getState().building.region;
    this.windowRows = store.getState().building.windowsRows;
    this.archType = store.getState().building.archType;
    this.angle = store.getState().building.angle;
    this.taxDigit = TAX_DIGIT;
    this.taxPaper = TAX_PAPER;
  }

  get buildingArea(): number {
    return this.length * this.width;
  }

  get buildingPerimeter(): number {
    return (this.width + this.length) * 2;
  }

  get snowZone(): number {
    const { snow } = CALC_REGIONS.find((it) => it.id === this.region);
    return snow;
  }

  // get snowWeight(): number {
  //   const snow = CALC_SNOW_WEIGHT[this.snowZone];
  //   const area = this.buildingArea;
  //   return Math.round(snow * area);
  // }

  get spanStep(): number {
    const maxStep = this.fences === CALC_FENSES[0].id ? CALC_SPAN_STEP.tent : CALC_SPAN_STEP.also;
    const ceil = Math.ceil(this.length / maxStep);
    const step = this.length / ceil;
    return Number(step.toFixed(3));
  }

  get skeletonWeight(): number {
    const area = this.buildingArea;
    const snow = this.snowZone;
    let coeffFences: number;
    switch (this.fences) {
      case CALC_FENSES[0].id:
        coeffFences = CALC_TENT.consumptionK;
        break;
      case CALC_FENSES[1].id:
        coeffFences = CALC_PROFNASTIL.consumptionK;
        break;
      case CALC_FENSES[2].id:
        coeffFences = CALC_SANDWICH.consumptionK;
        break;
      default:
        coeffFences = 0;
        break;
    }

    const heightDelta = this.height - CALC_COEFFS.height.base;
    const heightCoeff = 1 + heightDelta * CALC_COEFFS.height.coeff;
    const widthDelta = this.width - CALC_COEFFS.width.base;
    const widthBaseCoeff = widthDelta > 0 ? CALC_COEFFS.width.coeffUp : CALC_COEFFS.width.coeffDown;
    const widthCoeff = 1 + Math.abs(widthDelta) * widthBaseCoeff;
    const consumption = CALC_METAL_CONSUMPTION[snow] * heightCoeff * widthCoeff;

    const weightTotal = consumption * area * coeffFences;
    return Math.round(weightTotal);
  }

  get steelPileCount(): number {
    const buildingWeight = this.skeletonWeight + this.spanStep;
    const lenPiles = (this.length / this.spanStep) * 2 + 2;
    const widPiles = Math.ceil(this.width / CALC_PILES.stepButt - 1) * 2;
    const perimeterPiles = lenPiles + widPiles;
    const weightPiles = Math.ceil(buildingWeight / CALC_PILES.loadCapacity);
    return perimeterPiles > weightPiles ? perimeterPiles : weightPiles;
  }

  get gableHeight(): number {
    let heightGable: number;
    switch (this.archType) {
      case 0:
        heightGable = this.width * Math.tan(convertDegToRad(this.angle));
        break;
      case 1:
        heightGable = (this.width / 2) * Math.tan(convertDegToRad(this.angle));
        break;
      case 2:
        heightGable = (this.width / 4) * Math.tan(convertDegToRad(this.angle));
        break;
      default:
        heightGable = 0;
        break;
    }
    return Number(heightGable.toFixed(3));
  }

  get atticArea(): number {
    const atticHeight = this.gableHeight;
    let areaAttic: number;
    switch (this.archType) {
      case 0:
        areaAttic = (this.width * atticHeight) / 2;
        break;
      case 1:
        areaAttic = (this.width / 2) * atticHeight;
        break;
      case 2:
        areaAttic = (this.width / 4) * atticHeight * 2;
        break;
      default:
        areaAttic = 0;
        break;
    }
    return Number(areaAttic.toFixed(3));
  }

  get buttArea(): number {
    const areaButt = this.height * this.width + this.atticArea;
    return Number(areaButt.toFixed(3));
  }
}

export default Building;
