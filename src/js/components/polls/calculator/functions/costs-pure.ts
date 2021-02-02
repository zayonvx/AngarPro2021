import { CALC_COEFFS, CALC_FENSES, CALC_FOUNDATION } from '../constants/calc-constants-general';
import { getFloorArea, getFoundationConcreteVolume, getGateArea, getWindowArea } from './calc-functions-level-1';
import {
  getBuildingRoofArea,
  getSkeletonWeight,
  getSteelPileCount,
  getTotalWallAreaNetto,
} from './calc-functions-level-0';
import {
  priceBolts,
  pricesDoors,
  pricesFensesMounting,
  pricesFloor,
  pricesFoundation,
  pricesGates,
  priceSkeletonMetal,
  priceSkeletonMounting,
  pricesRoofFenses,
  pricesWallFenses,
  pricesWindows,
} from '../constants/calc-constants-prices';
import {
  taxFactoryFenses,
  taxFactoryOpenings,
  taxFactorySkeleton,
  taxFloor,
  taxMountingFenses,
  taxMountingSkeleton,
} from '../constants/calc-constants-taxes';
import store from '../../../../../store/store';

export const getCostSkeleton = (): number => {
  const weight = getSkeletonWeight();
  const boltsCost = Math.ceil(weight * CALC_COEFFS.bolts * priceBolts);
  const factoryCost = Math.ceil(weight * priceSkeletonMetal + boltsCost);
  return factoryCost * taxFactorySkeleton;
};
export const getCostFenses = (): number => {
  const { fences } = store.getState().building;
  const areaWall = getTotalWallAreaNetto();
  const areaRoof = getBuildingRoofArea();

  let additionsCoeff: number;
  switch (fences) {
    case CALC_FENSES[0].id: {
      additionsCoeff = CALC_COEFFS.additionsTent + 1;
      break;
    }
    case CALC_FENSES[1].id: {
      additionsCoeff = CALC_COEFFS.additionsProfnastil + 1;
      break;
    }
    case CALC_FENSES[2].id: {
      additionsCoeff = CALC_COEFFS.additionsSandwich + 1;
      break;
    }
    default:
      break;
  }

  const priceWall = pricesWallFenses.find((it) => it.id === fences).price;
  const priceRoof = pricesRoofFenses.find((it) => it.id === fences).price;
  const factoryCost = Math.ceil((areaWall * priceWall + areaRoof * priceRoof) * additionsCoeff);
  const { tax } = taxFactoryFenses.find((it) => it.id === fences);
  const cost = factoryCost * tax;
  return Math.ceil(cost);
};
export const getCostSkeletonMounting = (): number => {
  const weight = getSkeletonWeight();
  const factoryCost = weight * priceSkeletonMounting;
  const cost = factoryCost * taxMountingSkeleton;
  return Math.ceil(cost);
};
export const getCostFensesMounting = (): number => {
  const areaWall = getTotalWallAreaNetto();
  const areaRoof = getBuildingRoofArea();
  const area = areaWall + areaRoof;
  const { fences } = store.getState().building;
  const { price } = pricesFensesMounting.find((it) => it.id === fences);
  const factoryCost = area * price;
  const cost = factoryCost * taxMountingFenses;
  return Math.ceil(cost);
};
export const getCostGates = (): number => {
  const { gatesType } = store.getState().building;
  const gatesPrice = pricesGates.find((it) => it.id === gatesType).price;
  const factoryCostGates = Math.ceil(getGateArea() * gatesPrice);
  const cost = factoryCostGates * taxFactoryOpenings;
  return Math.ceil(cost);
};
export const getCostDoors = (): number => {
  const { doorsType } = store.getState().building;
  const { doorsCount } = store.getState().building;
  const doorPrice = pricesDoors.find((it) => it.id === doorsType).price;
  const factoryCostDoors = Math.ceil(doorsCount * doorPrice);
  const cost = factoryCostDoors * taxFactoryOpenings;
  return Math.ceil(cost);
};
export const getCostWindows = (): number => {
  const windowPrice = pricesWindows[0].price;
  const factoryCostWindows = Math.ceil(getWindowArea() * windowPrice);
  const cost = factoryCostWindows * taxFactoryOpenings;
  return Math.ceil(cost);
};
export const getCostFoundation = (): number => {
  const { foundation } = store.getState().building;
  const index = CALC_FOUNDATION.findIndex((it) => it.id === foundation);
  const pileCount = getSteelPileCount();
  const concreteVolume = getFoundationConcreteVolume();
  let costBrutto: number;
  switch (index) {
    case 0:
      costBrutto = 0;
      break;
    case 1:
      costBrutto = pricesFoundation[1].price * pileCount;
      break;
    case 2:
      costBrutto = pricesFoundation[1].price * pileCount + pricesFoundation[2].price * concreteVolume;
      break;
    default:
      costBrutto = pricesFoundation[index].price * concreteVolume;
      break;
  }
  const factoryCostGates = Math.ceil(costBrutto);
  const cost = factoryCostGates * taxFactoryOpenings;
  return Math.ceil(cost);
};
export const getCostFloor = (): number => {
  const { floor } = store.getState().building;
  const floorPrice = pricesFloor.find((it) => it.id === floor).price;
  const factoryCost = Math.ceil(getFloorArea() * floorPrice);
  const cost = factoryCost * taxFloor;
  return Math.ceil(cost);
};
