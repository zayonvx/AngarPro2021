import { CALC_PRICE_LIST } from '../constants/calc-constants-general';
import { getBuildingArea } from './calc-functions-level-2';
import { taxDigit, taxPaper } from '../constants/calc-constants-taxes';
import {
  descDoors,
  descFenses,
  descFloor,
  descFoundation,
  descGates,
  descSkeleton,
  descWindows,
} from './costs-descriptions';
import {
  getCostDoors,
  getCostFenses,
  getCostFensesMounting,
  getCostFloor,
  getCostFoundation,
  getCostGates,
  getCostSkeleton,
  getCostSkeletonMounting,
  getCostWindows,
} from './costs-pure';

const getCostsWithTaxes = (): number[] => [
  Math.round(getCostFoundation() * taxPaper),
  Math.round(getCostSkeleton() * taxDigit),
  Math.round(getCostFenses() * taxDigit),
  Math.round(getCostGates() * taxDigit),
  Math.round(getCostDoors() * taxDigit),
  Math.round(getCostWindows() * taxDigit),
  Math.round(getCostSkeletonMounting() * taxPaper),
  Math.round(getCostFensesMounting() * taxPaper),
  Math.round(getCostFloor() * taxPaper),
];
const getCostTotal = (): number => {
  const array = getCostsWithTaxes();
  let sum = 0;
  array.forEach((it) => {
    sum += Number(it);
  });
  return Math.ceil(sum);
};
const getCostPerSquareMeter = (): number => {
  const totalCost = getCostTotal();
  const costPerMeter = totalCost / getBuildingArea();
  return Math.round(costPerMeter);
};
export const getPositionsCost = (): { position: string; description: string; cost: number }[] => {
  const costs = getCostsWithTaxes();
  const descriptionFoundation = descFoundation();
  const descriptionSkeleton = descSkeleton();
  const descriptionFenses = descFenses();
  const descriptionGates = descGates();
  const descriptionDoors = descDoors();
  const descriptionWindows = descWindows();
  const descriptionFloor = descFloor();

  const brigade = 'Бригада поставщика';

  return [
    { position: CALC_PRICE_LIST[0], description: descriptionFoundation, cost: costs[0] },
    { position: CALC_PRICE_LIST[1], description: descriptionSkeleton, cost: costs[1] },
    { position: CALC_PRICE_LIST[2], description: descriptionFenses, cost: costs[2] },
    { position: CALC_PRICE_LIST[3], description: descriptionGates, cost: costs[3] },
    { position: CALC_PRICE_LIST[4], description: descriptionDoors, cost: costs[4] },
    { position: CALC_PRICE_LIST[5], description: descriptionWindows, cost: costs[5] },
    { position: CALC_PRICE_LIST[6], description: brigade, cost: costs[6] },
    { position: CALC_PRICE_LIST[7], description: brigade, cost: costs[7] },
    { position: CALC_PRICE_LIST[8], description: brigade, cost: costs[8] },
    { position: CALC_PRICE_LIST[9], description: descriptionFloor, cost: costs[9] },
    // { position: null },
  ];
};
export const getTotalCost = (): { position: string; cost: number } => {
  const totalCost = getCostTotal();
  return { position: CALC_PRICE_LIST[10], cost: totalCost };
};
export const getSpecificCost = (): { position: string; cost: number } => {
  const costPerMeter = getCostPerSquareMeter();
  return { position: CALC_PRICE_LIST[11], cost: costPerMeter };
};
