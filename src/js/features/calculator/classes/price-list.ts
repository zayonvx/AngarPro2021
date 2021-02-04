import PriceListRow from './price-list-rows';
import { IPriceRow } from './_types';

class PriceList {
  private priceRow: PriceListRow;

  constructor() {
    this.priceRow = new PriceListRow();
  }

  get list(): IPriceRow[] {
    return [
      this.priceRow.FoundationRow,
      this.priceRow.SkeletonRow,
      this.priceRow.SkeletonMountingRow,
      this.priceRow.RoofRow,
      this.priceRow.FencesRoofMountingRow,
      this.priceRow.WallRow,
      this.priceRow.FencesWallMountingRow,
      this.priceRow.GatesRow,
      this.priceRow.DoorsRow,
      this.priceRow.WindowsRow,
      this.priceRow.FloorRow,
      this.priceRow.TotalRow,
      this.priceRow.SpecificRow,
    ];
  }
}

export default PriceList;
