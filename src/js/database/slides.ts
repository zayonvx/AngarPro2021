export const slides = [
  {
    id: 'slide0',
    fileNamePrefix: '/img/system/hero-image/1-',
    textMaster: 'каркасные здания из сендвич панелей',
    textSlave: {
      top: 'У нас вы можете заказать проектирование, производство и монтаж здания из сендвич панелей.',
      bottom: 'Сделаем устройство фундаментов и полов, а также подготовим площадку.',
    },
    anim: true,
    alt: 'Изображение ангара из сендвича',
  },
  {
    id: 'slide1',
    fileNamePrefix: '/img/system/hero-image/2-',
    textMaster: 'ангары и навесы из профлиста',
    textSlave: {
      top: 'Мы производим и монтируем комплекты каркасных ангаров с ограждениями из профнастила.',
      bottom: 'Воспользуйтесь калькулятором стоимости зданий чтобы узнать цену.',
    },
    anim: false,
    alt: 'Изображение ангара из профлиста',
  },
  {
    id: 'slide2',
    fileNamePrefix: '/img/system/hero-image/3-',
    textMaster: 'тентовые каркасные здания',
    textSlave: {
      top: 'Проектирование, произвоство и монтаж каркасных тентовых ангаров, павильонов, тепляков и укрытий.',
      bottom: 'Вы можете заполнить и отправить форму запроса. Мы вышлем коммерческое предложение.',
    },
    anim: false,
    alt: 'Изображение ангара из тента',
  },
];
export const sliderParameters = {
  wrapperAnimationTransition: {
    durationMain: '800ms',
    durationTouchStart: '50ms',
  },
  acceptSwipeDistance: 150,
  LEFT: 'left',
  RIGHT: 'right',
};
