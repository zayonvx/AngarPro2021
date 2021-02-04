import { IPriceRow } from './_types';
import PriceListAbstract from './price-list-abstract';
import { CALC_PRICE_LIST_NAMES } from '../constants/calc-constants-general';
import Building from './building';

class PriceListRow extends PriceListAbstract {
  private building: Building;

  constructor() {
    super();
    this.building = new Building();
  }

  get costTotal(): number {
    return Math.ceil(
      this.foundation.cost +
        this.skeleton.costMaterial +
        this.skeleton.costMounting +
        this.roof.costMaterial +
        this.roof.costMounting +
        this.walls.costMaterial +
        this.walls.costMounting +
        this.gates.cost +
        this.doors.cost +
        this.windows.cost +
        this.floor.cost,
    );
  }

  get costSpecific(): number {
    const area = this.building.buildingArea;
    return Math.ceil(this.costTotal / area);
  }

  get FoundationRow(): IPriceRow {
    return {
      posName: this.foundation.posName,
      posDescription: this.foundation.description,
      posCost: this.foundation.cost,
    };
  }

  get SkeletonRow(): IPriceRow {
    return {
      posName: this.skeleton.nameMaterial,
      posDescription: this.skeleton.descriptionMaterial,
      posCost: this.skeleton.costMaterial,
    };
  }

  get RoofRow(): IPriceRow {
    return {
      posName: this.roof.nameMaterial,
      posDescription: this.roof.descriptionMaterial,
      posCost: this.roof.costMaterial,
    };
  }

  get WallRow(): IPriceRow {
    return {
      posName: this.walls.posMaterialName,
      posDescription: this.walls.descriptionMaterial,
      posCost: this.walls.costMaterial,
    };
  }

  get GatesRow(): IPriceRow {
    return { posName: this.gates.posName, posDescription: this.gates.description, posCost: this.gates.cost };
  }

  get DoorsRow(): IPriceRow {
    return { posName: this.doors.posName, posDescription: this.doors.description, posCost: this.doors.cost };
  }

  get WindowsRow(): IPriceRow {
    return {
      posName: this.windows.posName,
      posDescription: this.windows.description,
      posCost: this.windows.cost,
    };
  }

  get SkeletonMountingRow(): IPriceRow {
    return {
      posName: this.skeleton.nameMounting,
      posDescription: this.skeleton.descriptionMounting,
      posCost: this.skeleton.costMounting,
    };
  }

  get FencesRoofMountingRow(): IPriceRow {
    return {
      posName: this.roof.nameMounting,
      posDescription: this.roof.descriptionMounting,
      posCost: this.roof.costMounting,
    };
  }

  get FencesWallMountingRow(): IPriceRow {
    return {
      posName: this.walls.posMountingName,
      posDescription: this.walls.posMountingDescription,
      posCost: this.walls.costMounting,
    };
  }

  get FloorRow(): IPriceRow {
    return { posName: this.floor.posName, posDescription: this.floor.description, posCost: this.floor.cost };
  }

  get TotalRow(): IPriceRow {
    return { posName: CALC_PRICE_LIST_NAMES.total, posDescription: '', posCost: this.costTotal };
  }

  get SpecificRow(): IPriceRow {
    return { posName: CALC_PRICE_LIST_NAMES.specific, posDescription: '', posCost: this.costSpecific };
  }
}

export default PriceListRow;
