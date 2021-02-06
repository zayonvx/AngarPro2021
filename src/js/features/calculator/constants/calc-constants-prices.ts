const concreteFullStack = 15000;
// const concreteStock = 5000;

export const PRICE_FOUNDATION = [
  // with payload
  { id: 0, price: 0 },
  { id: 1, price: 6000 }, // per one pile
  { id: 2, price: concreteFullStack }, // payload per length meter of rostverk + piles
  { id: 3, price: concreteFullStack }, // payload per qubic meter
  { id: 4, price: concreteFullStack }, // payload per square meter
];
export const PRICES_FLOOR = [
  { id: 0, thickness: 0, price: 0 },
  { id: 1, thickness: 0.1, price: 500 }, // per 1 square meter with payload (grid + pay + pump
  // +lighthouse)

  { id: 2, thickness: 0.15, price: 500 },
  { id: 3, thickness: 0.2, price: 1550 }, // per 1 square meter with payload (reinf x 2 + pay +
  // pump+lighthouse)
];

export const PRICE_WALL_FENCES = [
  { id: 0, price: 220 },
  { id: 1, price: 500 },
  { id: 2, price: 1850 },
];

export const PRICE_ROOF_FENCES = [
  { id: 0, price: 220 },
  { id: 1, price: 650 },
  { id: 2, price: 2000 },
];

export const PRICE_GATES = [
  { id: 0, price: 0 },
  { id: 1, price: 3500 },
  { id: 2, price: 5000 },
  { id: 3, price: 4000 },
  { id: 4, price: 6000 },
  { id: 5, price: 9000 },
  { id: 6, price: 12000 },
  { id: 7, price: 6000 },
  { id: 8, price: 8000 },
];
export const PRICE_DOORS = [
  { id: 0, price: 0 },
  { id: 1, price: 13000 },
  { id: 2, price: 22000 },
];
export const PRICE_WINDOWS = 3000;

export const PRICE_SKELETON_METAL = 100;
export const PRICE_BOLTS = 300;

export const PRICE_SKELETON_MOUNTING = 15;
export const PRICE_FENCES_MOUNTING = [
  { id: 0, price: 50 },
  { id: 1, price: 100 },
  { id: 2, price: 400 },
];
