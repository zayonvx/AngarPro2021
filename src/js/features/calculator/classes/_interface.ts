import store from '../../../../store/store';
import {
  TAX_DIGIT,
  TAX_FACTORY_FENCES,
  TAX_FACTORY_OPENINGS,
  TAX_FACTORY_SKELETON,
  TAX_FLOOR,
  TAX_FOUNDATION,
  TAX_MOUNTING_FENCES,
  TAX_MOUNTING_SKELETON,
  TAX_PAPER,
} from '../constants/calc-constants-taxes';
import {
  CALC_ARCHITECTURAL_TYPES,
  CALC_COEFFS,
  CALC_CORNICE,
  CALC_DOORS,
  CALC_FENSES,
  CALC_FLOOR,
  CALC_FOUNDATION,
  CALC_GATES,
  CALC_PRICE_LIST_NAMES,
  CALC_REGIONS,
  CALC_WINDOW_PARAMS, CALC_WINDOWS,
} from '../constants/calc-constants-general';
import {
  PRICE_BOLTS,
  PRICE_DOORS,
  PRICE_FENCES_MOUNTING,
  PRICE_FOUNDATION,
  PRICE_GATES,
  PRICE_ROOF_FENCES,
  PRICE_SKELETON_METAL,
  PRICE_SKELETON_MOUNTING,
  PRICE_WALL_FENCES,
  PRICE_WINDOWS,
  PRICES_FLOOR,
} from '../constants/calc-constants-prices';

class BuildingDatas {
  foundationType = store.getState().building.foundation;

  archType = store.getState().building.archType;

  doorsType = store.getState().building.doorsType;

  fencesType = store.getState().building.fences;

  gatesType = store.getState().building.gatesType;

  floorType = store.getState().building.floor;

  archTypeName = CALC_ARCHITECTURAL_TYPES.find((it) => it.id === this.archType).name;

  angleRoof = store.getState().building.angle;

  doorsCount = store.getState().building.doorsCount;

  doorsDescription = CALC_DOORS.types.find((it) => it.id === this.doorsType).name;

  doorsPosNameText = CALC_PRICE_LIST_NAMES.doors;

  doorsPrice = PRICE_DOORS.find((it) => it.id === this.doorsType).price;

  fencesAdditions = CALC_COEFFS.fences.find((it) => it.id === this.fencesType).coefficient;

  fencesPriceMounting = PRICE_FENCES_MOUNTING.find((it) => it.id === this.fencesType).price;

  fencesTaxMounting = TAX_MOUNTING_FENCES;

  fencesTax = TAX_FACTORY_FENCES.find((it) => it.id === this.fencesType).value;

  fencesDescription = CALC_FENSES.find((it) => it.id === this.fencesType).name;

  fencesDescriptionMounting = 'Бригада поставщика';

  floorDescription = CALC_FLOOR.type.find((it) => it.id === this.floorType).name;

  floorPosText = CALC_PRICE_LIST_NAMES.floor;

  floorPrice = PRICES_FLOOR.find((it) => it.id === this.floorType).price;

  floorTax = TAX_FLOOR;

  foundationDescription = CALC_FOUNDATION.find((it) => it.id === this.foundationType).name;

  foundationLineSectionArea = CALC_FOUNDATION[3].sectionArea;

  foundationPilePrice = PRICE_FOUNDATION[1].price;

  foundationPlateThickness = CALC_FOUNDATION[4].thickness;

  foundationPosText = CALC_PRICE_LIST_NAMES.foundation;

  foundationPrice = PRICE_FOUNDATION.find((it) => it.id === this.foundationType).price;

  foundationRostverkSectionArea = CALC_FOUNDATION[2].sectionArea;

  foundationTax = TAX_FOUNDATION;

  gatesCount = store.getState().building.gatesCount;

  gatesDescriptionNameText = CALC_GATES.types.find((it) => it.id === this.gatesType).name;

  gatesHeight = store.getState().building.gatesHeight;

  gatesPosNameText = CALC_PRICE_LIST_NAMES.gates;

  gatesPrice = PRICE_GATES.find((it) => it.id === this.gatesType).price;

  gatesWidth = store.getState().building.gatesWidth;

  height = store.getState().building.height;

  length = store.getState().building.length;

  openingsTax = TAX_FACTORY_OPENINGS;

  region = store.getState().building.region;

  regionName = CALC_REGIONS.find((it) => it.id === this.region).name;

  roofMaterialPosName = CALC_PRICE_LIST_NAMES.roof;

  roofMountingPosName = CALC_PRICE_LIST_NAMES.roofMounting;

  roofCorniceLength = CALC_CORNICE.find((it) => it.id === this.fencesType).length;

  roofPriceMaterial = PRICE_ROOF_FENCES.find((it) => it.id === this.fencesType).price;

  skeletonBoltCoeff = CALC_COEFFS.bolts;

  skeletonMaterialPosNameText = CALC_PRICE_LIST_NAMES.skeleton;

  skeletonMountingPosNameText = CALC_PRICE_LIST_NAMES.skeletonMounting;

  skeletonPriceBolts = PRICE_BOLTS;

  skeletonPriceMaterial = PRICE_SKELETON_METAL;

  skeletonPriceMounting = PRICE_SKELETON_MOUNTING;

  skeletonTaxesMaterial = TAX_FACTORY_SKELETON;

  skeletonTaxesMounting = TAX_MOUNTING_SKELETON;

  taxDigit = TAX_DIGIT;

  taxPaper = TAX_PAPER;

  wallMaterialPosName = CALC_PRICE_LIST_NAMES.wall;

  wallMountingPosName = CALC_PRICE_LIST_NAMES.wallMounting;

  wallPriceMaterial = PRICE_WALL_FENCES.find((it) => it.id === this.fencesType).price;

  width = store.getState().building.width;

  windowsRows = store.getState().building.windowsRows;

  windowHorizontalGap = CALC_WINDOW_PARAMS.windowHorizontalGap;

  windowsHeight = CALC_WINDOW_PARAMS.windowHeight;

  windowsPosNameText = CALC_PRICE_LIST_NAMES.windows;

  windowsPrices = PRICE_WINDOWS;

  windowsDescription = CALC_WINDOWS.find((it) => it.id === this.windowsRows).name;
}

export default BuildingDatas;
