import {
  CALC_DOORS,
  CALC_FENSES,
  CALC_FLOOR,
  CALC_FOUNDATION,
  CALC_GATES,
  CALC_WINDOWS,
} from './calc-constants-general';

export const priceConcrete = 4500; //  per 1 qubic meter
export const priceReinforcement = 2500; //  per 1 tonn
export const pricesFoundation = [
  // with payload
  { id: CALC_FOUNDATION[0].id, price: 0 },
  { id: CALC_FOUNDATION[1].id, price: 4000 }, // per one pile
  { id: CALC_FOUNDATION[2].id, price: 5000 }, // payload per qubic meter of rostverk + piles
  { id: CALC_FOUNDATION[3].id, price: 4500 }, // payload per qubic meter
  { id: CALC_FOUNDATION[4].id, price: 3500 }, // payload per qubic meter
];
export const pricesFloor = [
  { id: CALC_FLOOR.type[0].id, thickness: 0, price: 0 },
  { id: CALC_FLOOR.type[1].id, thickness: 0.1, price: 500 }, // per 1 square meter with payload (grid + pay + pump
  // +lighthouse)

  { id: CALC_FLOOR.type[2].id, thickness: 0.15, price: 500 },
  { id: CALC_FLOOR.type[3].id, thickness: 0.2, price: 1550 }, // per 1 square meter with payload (reinf x 2 + pay +
  // pump+lighthouse)
];

export const pricesWallFenses = [
  { id: CALC_FENSES[0].id, price: 210 },
  { id: CALC_FENSES[1].id, price: 450 },
  { id: CALC_FENSES[2].id, price: 1550 },
];
export const pricesRoofFenses = [
  { id: CALC_FENSES[0].id, price: 210 },
  { id: CALC_FENSES[1].id, price: 550 },
  { id: CALC_FENSES[2].id, price: 1850 },
];

export const pricesGates = [
  { id: CALC_GATES.types[0].id, price: 0 },
  { id: CALC_GATES.types[1].id, price: 3000 },
  { id: CALC_GATES.types[2].id, price: 5000 },
  { id: CALC_GATES.types[3].id, price: 4000 },
  { id: CALC_GATES.types[4].id, price: 6000 },
  { id: CALC_GATES.types[5].id, price: 9000 },
  { id: CALC_GATES.types[6].id, price: 12000 },
  { id: CALC_GATES.types[7].id, price: 6000 },
  { id: CALC_GATES.types[8].id, price: 8000 },
];
export const pricesDoors = [
  { id: CALC_DOORS.types[0].id, price: 0 },
  { id: CALC_DOORS.types[1].id, price: 13000 },
  { id: CALC_DOORS.types[2].id, price: 22000 },
];
export const pricesWindows = [
  { id: CALC_WINDOWS[0].id, price: 3000 },
  { id: CALC_WINDOWS[1].id, price: 3700 },
];

export const priceSkeletonMetalTent = 100;
export const priceSkeletonMetal = 95;
export const priceBolts = 300;
export const pricePressureProfile = 170;

export const priceSkeletonMountingTent = 25;
export const priceSkeletonMounting = 20;
export const pricesFensesMounting = [
  { id: CALC_FENSES[0].id, price: 100 },
  { id: CALC_FENSES[1].id, price: 200 },
  { id: CALC_FENSES[2].id, price: 300 },
];
