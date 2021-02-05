import { CALC_FLOOR, CALC_FOUNDATION, CALC_GATES } from './calc-constants-general';

export const PRICE_FOUNDATION = [
  // with payload
  { id: CALC_FOUNDATION[0].id, price: 0 },
  { id: CALC_FOUNDATION[1].id, price: 4000 }, // per one pile
  { id: CALC_FOUNDATION[2].id, price: 5000 }, // payload per qubic meter of rostverk + piles
  { id: CALC_FOUNDATION[3].id, price: 4500 }, // payload per qubic meter
  { id: CALC_FOUNDATION[4].id, price: 3500 }, // payload per qubic meter
];
export const PRICES_FLOOR = [
  { id: CALC_FLOOR.type[0].id, thickness: 0, price: 0 },
  { id: CALC_FLOOR.type[1].id, thickness: 0.1, price: 500 }, // per 1 square meter with payload (grid + pay + pump
  // +lighthouse)

  { id: CALC_FLOOR.type[2].id, thickness: 0.15, price: 500 },
  { id: CALC_FLOOR.type[3].id, thickness: 0.2, price: 1550 }, // per 1 square meter with payload (reinf x 2 + pay +
  // pump+lighthouse)
];

export const PRICE_WALL_FENCES = {
  priceTent: 210,
  priceProfnastil: 450,
  priceSandwich: 1550,
};
export const PRICE_ROOF_FENCES = {
  priceTent: 210,
  priceProfnastil: 550,
  priceSandwich: 1850,
};

export const PRICE_GATES = [
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
export const PRICE_DOORS = {
  none: 0,
  PVC: 13000,
  steel: 22000,
};
export const PRICE_WINDOWS = 3000;

export const PRICE_SKELETON_METAL = 95;
export const PRICE_BOLTS = 300;

export const PRICE_SKELETON_MOUNTING = 15;
export const PRICE_FENCES_MOUNTING = {
  priceTent: 50,
  priceProfnastil: 100,
  priceSandwich: 200,
};
