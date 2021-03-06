export const CALC_PRICE_LIST_NAMES = {
  foundation: 'Фундамент',
  skeleton: 'Металло-каркас',
  roof: 'Кровля',
  wall: 'Стены',
  gates: 'Ворота',
  doors: 'Двери',
  windows: 'Окна',
  skeletonMounting: 'Монтаж каркаса',
  roofMounting: 'Монтаж кровли',
  wallMounting: 'Монтаж стен',
  floor: 'Пол',
  total: 'Общая стоимость',
  specific: 'За 1 кв. метр',
};

export const CALC_REGIONS: { id: number; name: string; snow: number; wind?: number }[] = [
  { id: 0, name: 'Москва и область', snow: 3, wind: 1 },
  { id: 1, name: 'Санкт-Петербург', snow: 3, wind: 2 },
  { id: 2, name: 'Иваново', snow: 4, wind: 1 },
  { id: 3, name: 'Ярославль', snow: 4, wind: 1 },
  { id: 4, name: 'Нижний Новгород', snow: 4, wind: 1 },
  { id: 5, name: 'Рязань', snow: 3, wind: 1 },
  { id: 6, name: 'Волгоград', snow: 2, wind: 1 },
  { id: 7, name: 'Ростов-на-Дону', snow: 2, wind: 1 },
  { id: 8, name: 'Смоленск', snow: 3, wind: 1 },
  { id: 9, name: 'Воронеж', snow: 3, wind: 1 },
  { id: 10, name: 'Тула', snow: 3, wind: 1 },
];
export const CALC_METAL_CONSUMPTION: number[] = [0, 18, 20, 22, 24, 26];
export const CALC_SNOW_WEIGHT: number[] = [0, 50, 100, 150, 200, 250, 300, 350, 400];
export const CALC_ARCHITECTURAL_TYPES: { id: number; name: string; minWidth: number; maxWidth: number }[] = [
  { id: 0, name: 'Односкатный', minWidth: 5, maxWidth: 15 },
  { id: 1, name: 'Двухскатный', minWidth: 10, maxWidth: 36 },
  { id: 2, name: 'Двухпролетный', minWidth: 30, maxWidth: 50 },
];
export const CALC_FOUNDATION: { id: number; name: string; sectionArea?: number; thickness?: number }[] = [
  { id: 0, name: 'Без фундамента' },
  { id: 1, name: 'Стальные сваи' },
  { id: 2, name: 'Стальные сваи с ж/б ростверком', sectionArea: 0.2 },
  { id: 3, name: 'Монолитный, ленточный', sectionArea: 0.3 },
  { id: 4, name: 'Монолитная ж/б плита', thickness: 0.2 },
];
export const CALC_FOUNDATION_TENT = [0, 1, 2, 3];
export const CALC_FOUNDATION_PROFNASTIL = [1, 2, 3];
export const CALC_FOUNDATION_SANDWICH = [2, 3, 4];

export const CALC_PILES: { loadCapacity: number; stepButt: 5 } = {
  loadCapacity: 8000, // kilogramms
  stepButt: 5,
};
export const CALC_FLOOR: {
  type: { id: number; name: string }[];
  grinding: { price: number };
  layered: { price: number };
} = {
  type: [
    { id: 0, name: 'Без полов' },
    { id: 1, name: 'Монолит 100мм' },
    { id: 2, name: 'Монолит 150мм' },
    { id: 3, name: 'Монолит 200мм' },
  ],
  grinding: { price: 1560 },
  layered: { price: 2190 },
};
export const CALC_CRANE: { type: string[]; capacites: string[] } = {
  type: ['нет', 'подвесной, электрический'],
  capacites: ['1', '2', '3.2', '5', '8'],
};

export const CALC_FENSES: { id: number; name: string }[] = [
  { id: 0, name: 'ПВХ-ткань (тент)' },
  { id: 1, name: 'Профнастил' },
  { id: 2, name: 'Сендвич-панель' },
];
export const CALC_SPAN_STEP = { tent: 4, also: 6 };

export const CALC_TENT = {
  material: [
    { id: 0, name: 'ПВХ-ткань 650гр.' },
    { id: 1, name: 'ПВХ-ткань 900гр.' },
  ],
  insulation: [
    { id: 1, name: 'воздушная прослойка' },
    { id: 2, name: 'утеплитель 100мм' },
    { id: 3, name: 'утеплитель 200мм' },
    { id: 4, name: 'утеплитель ForaProfi 100мм' },
    { id: 5, name: 'утеплитель ForaProfi 200мм' },
  ],
  incombustibility: [
    { id: 1, name: 'Г1' },
    { id: 2, name: 'Г2' },
  ],
  consumptionK: 1,
};
export const CALC_PROFNASTIL = {
  roof: [
    { id: 0, name: 'НС-44, оцинкованный' },
    { id: 1, name: 'НС-44, с полимерным покрытием' },
    { id: 2, name: 'НС-44, с анти-конденсатным покрытием' },
  ],
  wall: [
    { id: 0, name: 'МП-20, оцинкованный' },
    { id: 1, name: 'МП-20, с полимерным покрытием' },
  ],
  consumptionK: 1.15,
};
export const CALC_SANDWICH = {
  thickness: [
    { id: 60, name: '60мм' },
    { id: 80, name: '80мм' },
    { id: 100, name: '100мм' },
    { id: 120, name: '120мм' },
    { id: 150, name: '150мм' },
    { id: 200, name: '200мм' },
  ],
  type: [
    { id: 0, name: 'с базальтовым утеплителем' },
    { id: 1, name: 'с утеплителем PIR' },
    { id: 2, name: 'с утеплителем пенополистирол' },
  ],
  consumptionK: 1.1,
};

export const CALC_CORNICE = [
  { id: 0, length: 0 },
  { id: 1, length: 0.3 },
  { id: 2, length: 0.3 },
];
export const CALC_DOORS: { types: { id: number; name: string }[]; quantities: { id: number; name: string }[] } = {
  types: [
    { id: 0, name: 'Нет' },
    { id: 1, name: 'Из профиля ПВХ' },
    { id: 2, name: 'Стальная, утепленная' },
  ],
  quantities: [
    { id: 0, name: '1' },
    { id: 1, name: '2' },
    { id: 2, name: '3' },
    { id: 3, name: '4' },
  ],
};
export const CALC_WINDOWS: { id: number; name: string }[] = [
  { id: 0, name: 'Нет' },
  { id: 1, name: 'ПВХ, 1 лента окон по периметру' },
  { id: 2, name: 'ПВХ, 2 ленты окон по периметру' },
];
export const CALC_WINDOW_PARAMS = { windowHeight: 1.2, windowHorizontalGap: 1 };

export const CALC_COEFFS = {
  height: { coeff: 0.045, base: 6 }, // plus/minus metall per meter - base height 6m
  width: { coeffUp: 0.005, coeffDown: 0.015, base: 20 }, // plus/minus metall per meter - base width 20m
  bolts: 0.015,
  fences: [
    { id: 0, coefficient: 1.15 },
    { id: 1, coefficient: 1.1 },
    { id: 2, coefficient: 1.07 },
  ],
};

export const CALC_GATES: {
  types: { id: number; name: string; minWidth: number; minHeight: number; maxWidth: number; maxHeight: number }[];
  quantities: { id: number; name: string }[];
  step: number;
} = {
  types: [
    { id: 0, name: 'Нет', minWidth: 0, minHeight: 0, maxWidth: 0, maxHeight: 0 },
    { id: 1, name: 'Распашные', minWidth: 3, minHeight: 3, maxWidth: 4, maxHeight: 6 },
    { id: 2, name: 'Распашные утепленные', minWidth: 3, minHeight: 3, maxWidth: 4, maxHeight: 6 },
    { id: 3, name: 'Сдвижные', minWidth: 2, minHeight: 2, maxWidth: 5, maxHeight: 6 },
    { id: 4, name: 'Сдвижные утепленные', minWidth: 2, minHeight: 2, maxWidth: 5, maxHeight: 6 },
    { id: 5, name: 'Подъемные, без привода', minWidth: 2.5, minHeight: 2.2, maxWidth: 5, maxHeight: 5 },
    { id: 6, name: 'Подъемные, с приводом', minWidth: 2.5, minHeight: 2.2, maxWidth: 5, maxHeight: 5 },
    { id: 7, name: 'Роллетные', minWidth: 2.5, minHeight: 2.2, maxWidth: 6, maxHeight: 6 },
    { id: 8, name: 'Сдвижные типа "книжка"', minWidth: 6, minHeight: 3, maxWidth: 21, maxHeight: 10 },
  ],
  quantities: [
    { id: 0, name: '1' },
    { id: 1, name: '2' },
    { id: 2, name: '3' },
    { id: 3, name: '4' },
  ],
  step: 0.1,
};
export const CALC_GATES_TENT = [0, 1, 3, 7];
export const CALC_GATES_PROFNASTIL = [0, 1, 3, 5, 6, 7];
export const CALC_GATES_SANDWICH = [0, 2, 4, 5, 6, 8];
