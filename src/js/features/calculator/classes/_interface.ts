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
  CALC_COEFFS,
  CALC_CORNICE,
  CALC_DOORS,
  CALC_FENSES,
  CALC_FLOOR,
  CALC_FOUNDATION,
  CALC_GATES,
  CALC_PRICE_LIST_NAMES,
  CALC_WINDOW_PARAMS,
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
  width = store.getState().building.width;

  length = store.getState().building.length;

  height = store.getState().building.height;

  region = store.getState().building.region;

  archType = store.getState().building.archType;

  angleRoof = store.getState().building.angle;

  fences = store.getState().building.fences;

  windowsRows = store.getState().building.windowsRows;

  taxDigit = TAX_DIGIT;

  taxPaper = TAX_PAPER;

  foundationType = store.getState().building.foundation;

  foundationTax = TAX_FOUNDATION;

  foundationPrice = PRICE_FOUNDATION.find((it) => it.id === this.foundationType).price;

  foundationPilePrice = PRICE_FOUNDATION[1].price;

  foundationDescription = CALC_FOUNDATION.find((it) => it.id === this.foundationType).name;

  foundationPosText = CALC_PRICE_LIST_NAMES.foundation;

  foundationRostverkSectionArea = CALC_FOUNDATION[2].sectionArea;

  foundationLineSectionArea = CALC_FOUNDATION[3].sectionArea;

  foundationPlateThickness = CALC_FOUNDATION[4].thickness;

  floorType = store.getState().building.floor;

  floorPrice = PRICES_FLOOR.find((it) => it.id === this.floorType).price;

  floorTax = TAX_FLOOR;

  floorPosText = CALC_PRICE_LIST_NAMES.floor;

  floorDescription = CALC_FLOOR.type.find((it) => it.id === this.floorType).name;

  skeletonTaxesMaterial = TAX_FACTORY_SKELETON;

  skeletonPriceMaterial = PRICE_SKELETON_METAL;

  skeletonPriceBolts = PRICE_BOLTS;

  skeletonBoltCoeff = CALC_COEFFS.bolts;

  skeletonPriceMounting = PRICE_SKELETON_MOUNTING;

  skeletonTaxesMounting = TAX_MOUNTING_SKELETON;

  skeletonMaterialPosNameText = CALC_PRICE_LIST_NAMES.skeleton;

  skeletonMountingPosNameText = CALC_PRICE_LIST_NAMES.skeletonMounting;

  fencesTaxTent = TAX_FACTORY_FENCES.taxTent;

  fencesTaxProfnastil = TAX_FACTORY_FENCES.taxesProfnastil;

  fencesTaxSandwich = TAX_FACTORY_FENCES.taxesSandwich;

  fencesAdditionsTent = CALC_COEFFS.additionsTent;

  fencesAdditionsProfnastil = CALC_COEFFS.additionsProfnastil;

  fencesAdditionsSandwich = CALC_COEFFS.additionsSandwich;

  fencesPriceMountingTent = PRICE_FENCES_MOUNTING.priceTent;

  fencesPriceMountingProfnastil = PRICE_FENCES_MOUNTING.priceProfnastil;

  fencesPriceMountingSandwich = PRICE_FENCES_MOUNTING.priceSandwich;

  fencesTaxMounting = TAX_MOUNTING_FENCES;

  fencesTentDescriptionText = CALC_FENSES[0].name;

  fencesProfnastilDescriptionText = CALC_FENSES[1].name;

  fencesSandwichDescriptionText = CALC_FENSES[2].name;

  roofPriceTent = PRICE_ROOF_FENCES.priceTent;

  roofPriceProfnastil = PRICE_ROOF_FENCES.priceProfnastil;

  roofPriceSandwich = PRICE_ROOF_FENCES.priceSandwich;

  roofCorniceTent = CALC_CORNICE.tent;

  roofCorniceProfnastil = CALC_CORNICE.profnastil;

  roofCorniceSandwich = CALC_CORNICE.sandwich;

  roofMaterialPosName = CALC_PRICE_LIST_NAMES.roof;

  roofMountingPosName = CALC_PRICE_LIST_NAMES.roofMounting;

  wallPriceTent = PRICE_WALL_FENCES.priceTent;

  wallPriceProfnastil = PRICE_WALL_FENCES.priceProfnastil;

  wallPriceSandwich = PRICE_WALL_FENCES.priceSandwich;

  wallMaterialPosName = CALC_PRICE_LIST_NAMES.wall;

  wallMountingPosName = CALC_PRICE_LIST_NAMES.wallMounting;

  openingsTax = TAX_FACTORY_OPENINGS;

  gatesType = store.getState().building.gatesType;

  gatesWidth = store.getState().building.gatesWidth;

  gatesHeight = store.getState().building.gatesHeight;

  gatesCount = store.getState().building.gatesCount;

  gatesPrice = PRICE_GATES.find((it) => it.id === this.gatesType).price;

  gatesDescriptionNameText = CALC_GATES.types.find((it) => it.id === this.gatesType).name;

  gatesPosNameText = CALC_PRICE_LIST_NAMES.gates;

  doorsType = store.getState().building.doorsType;

  doorsCount = store.getState().building.doorsCount;

  doorsPrice = PRICE_DOORS.find((it) => it.id === this.doorsType).price;

  doorsDescription = CALC_DOORS.types.find((it) => it.id === this.doorsType).name;

  doorsPosNameText = CALC_PRICE_LIST_NAMES.doors;

  windowsHeight = CALC_WINDOW_PARAMS.windowHeight;

  windowHorizontalGap = CALC_WINDOW_PARAMS.windowHorizontalGap;

  windowsPrices = PRICE_WINDOWS;

  windowsPosNameText = CALC_PRICE_LIST_NAMES.windows;
}

export default BuildingDatas;
