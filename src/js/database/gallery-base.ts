import PropTypes from 'prop-types';

export const projectsOrder = [5, 7, 6, 10, 11, 8, 9, 4, 13, 12, 1, 2, 3, 14];

export const projects = [
  {
    // Ангар в Якутии
    id: '001',
    name: 'Ангар 13,5х15м',
    location: 'п.Усть-Нера, Якутия',
    description: 'Утепленный ангар для хранения и обслуживания вертолета AS 350 В2.',
    saga: {
      title: 'Ангар для вертолета в п.Усть-Нера, Республика Саха (Якутия).\nРазмеры: 13,5х15м.',
      subtitle:
        'Ангар обеспечивает круглогодичное обслуживание и эксплуатацию воздушного судна. Здание спроектировано и поставлено по заказу ООО "Поиск" в 2014 году.',
      text:
        'Интересен применением автоматических, утепленных ворот фирмы MegaDoor. Изготовление каркаса осуществлялось на нашем заводе в Московской области и доставлен авто-транспортом до места строительства. Сендвич-панели Заказчик закупал самостоятельно по нашему проекту. Поставка, монтаж и пуско-наладка ворот осуществлялась компанией MegaDoor.',
    },
    photos: [1, 2, 5, 3, 4],
    coordinates: [64.572303, 143.231447],
  },
  {
    // Спортнавес Патриот
    id: '002',
    name: 'Навес над спортивной площадкой 15х30х6м',
    location: 'Парк "Патриот", Московская область',
    description: 'Навес над спортивной площадкой.',
    saga: {
      title: 'Навес над спортивной площадкой 15х30х6м.',
      subtitle: 'Спортивная площадка для занятий баскетболом.',
      text:
        'Стальной каркас накрытый кровлей из поликарбоната. В комплекте поставлялись покрытие игровой площадки, защитные борта и сетка.',
    },
    photos: [1, 2, 3, 4, 5],
    coordinates: [55.557493, 36.82913],
  },
  {
    // Тепляк
    id: '003',
    name: 'Технологическое тентовое укрытие',
    location: 'г.Москва, р-н Андроновка',
    description: 'Тепляк для бетонирования пролетного строения в зимнее время',
    saga: {
      title: 'Технологическое тентовое укрытие.',
      subtitle: 'Комплект состоит из набора стальных элементов каркаса и тентовых полотен.',
      text:
        'Ширина тепляка может варьироваться от 10 до 36м. Длина с технической точки зрения ничем не ограничена. После окончания работ на текущей захватке тепляк быстро перемонтируется на следующий участок. Можно укрывать криволинейные участки съездов и эстакад.',
    },
    photos: [1, 5, 2, 3, 4],
    coordinates: [55.747153, 37.737833],
  },
  {
    // Ангар в Савельево
    id: '004',
    name: 'Цех 24х36х7м',
    location: 'д.Савельево, Ярославская область',
    description: 'Каркасно-тентовый цех для производства удобрений',
    saga: {
      title: 'Цех с двойным тентом 24х36х7м.',
      subtitle:
        'Организация двойного тента позволяет снизить расходы на отопление в холодный период года. Несмотря на двойной слой тента, в светлое время суток в цехе не требуется искусственное освещение. Плановый срок монтажа ангара 21 день.',
      text:
        'Хорошее решение по соотношению цена/качество для автоматизированного производства. Срок службы тентов составляет до 15 лет. Ангар установлен на плиты ПАГ-18 служащие полом произвоственной площадки.',
    },
    photos: [4, 5, 6, 1, 2, 3],
    coordinates: [56.646114, 38.623646],
  },
  {
    // Ангар в Ромашково
    id: '005',
    name: 'Ангар 30х18х6,5м',
    location: 'д.Ромашково, Московская область',
    description: 'Утепленный ангар для хранения и обслуживания вертолётов.',
    saga: {
      title: 'Ангар для хранения и обслуживания вертолётов 30х18х6,5м.',
      subtitle:
        'Назначение - хранение и подготовка к полету двух вертолетов бизнесс-класса. Ворота типа "книжка" наружного открывания, с размерами в свету 13,6х5м.',
      text:
        'Для снижения металлоемкости, а следовательно и цены, по продольной оси ангара расположены промежуточные опоры. Ворота выполнены утепленными, распашными, четырех-створчатыми. Ангар оборудован помещениями для летного состава, кладовыми, санузлом, системой пожаротушения. Ангар установлен на железобетонное основание.',
    },
    photos: [1, 2, 3, 5, 6, 4],
    coordinates: [55.725261, 37.332208],
  },
  {
    // Навигатор
    id: '006',
    name: 'Ангар 18х80х6м',
    location: 'г. Мытищи, Московская область',
    description: 'Шоу-рум по продаже гранита и мрамора',
    saga: {
      title: 'Складской ангар из профлиста 18х80х6м с подвесным краном.',
      subtitle: 'Быстровозводимые здания складов с устройством естественного освещения.',
      text:
        'Световые проемы заполнены профилированным поликарбонатом. Ангары оборудованы подвесными, электрическими кранами грузоподъемностью по 5 тонн. По периметру ангара выполнены световые проемы заполненные профилированным поликарбонатом. Плановый срок монтажа ангара 34 дня. На данном объекте фундаменты и полы выполнил заказчик.',
    },
    photos: [1, 2, 3, 4, 5],
    coordinates: [55.910109, 37.671315],
  },
  {
    // Алмазово КСК
    id: '007',
    name: 'Конно-спортивный комплекс',
    location: 'д.Алмазово, Московская область',
    description: 'Манеж, конюшни, "бочки", склады сена, летние конюшни.',
    saga: {
      title: 'Конно-спортивный комплекс в деревне Алмазово Московской области.',
      subtitle: 'Строительство КСК отличное комплексное решением по организации постоя лошадей частных владельцев.',
      text:
        'Комплекс состоит из конюшен, манежа, бочек, конкурного манежа, шагалки, а также жилых и технических зданий.',
    },
    photos: [1, 2, 7, 15, 6, 3, 5, 4, 16, 11, 13, 12, 14, 8, 9, 10],
    coordinates: [55.838476, 38.049136],
  },
  {
    // Сергиев-Посад КСК
    id: '008',
    name: 'Конный манеж',
    location: 'г.Сергиев-Посад, Московская область',
    description: 'Здание из сендвич-панелей.',
    saga: {
      title: 'Утепленный конный манеж. Размеры в плане 36х63х6м.',
      subtitle: 'Манеж позволяет в комфортных для лошадей условиях проводить занятия в холодное время года.',
      text:
        'Здание построено на свайно-монолитном фундаменте. Для восприятия снеговых нагрузок выполнен мощный стальной каркас из профильных труб. В качестве покрытия кровли использована сборная сендвич-панель. Ограждения стен изготовлены из трехслойных сендвич-панелей. По периметру здания выполнено ленточное остекление с рамами из ПВХ-профиля.',
    },
    photos: [2, 1, 3, 7, 4, 5, 6],
    coordinates: [56.300639, 38.160582],
  },
  {
    // Ивановская птицефабрика
    id: '009',
    name: 'Строительство новых цехов',
    location: 'д.Шилыково, Ивановская область',
    description: 'Реконструкция птицефабрики. Строительство новых цехов для содержания стада несушек',
    saga: {
      title: 'Птичники из сендвич-панелей 20х80м.',
      subtitle: 'Каркасные ангары обшитые сендвич-панелями.',
      text:
        'Отличное решение по соотношению цена/качество для цеха.\nЦеха рассчитаны на стадо в 75 тысяч голов.\nЦеха оборудованы комплексом оборудования для содержания.',
    },
    photos: [13, 14, 15, 16, 1, 9, 10, 2, 3, 11, 12, 6, 4, 5, 7, 17],
    coordinates: [56.92512, 40.747767],
  },
  {
    // Навес в Дорохово
    id: '010',
    name: 'Навес 15х60х6м',
    location: 'п.Дорохово, Московская область',
    description: 'Навес с ограждениями из профлиста',
    saga: {
      title: 'Навес для хранения пиломатериалов. Размеры 15х60х6м.',
      subtitle: 'Сооружение с ограждениями из профилированного листа -\nнедорогое и качественное решение.',
      text: 'В качестве основания применена монолитная, железобетонная плита.\nОна же является полом здания.',
    },
    photos: [1, 9, 2, 3, 4, 5, 6, 7, 8],
    coordinates: [55.548438, 36.353927],
  },
  {
    // Ангар в Есипопо
    id: '011',
    name: 'Ангар 22х54х5м',
    location: 'д.Есипово, Московская область',
    description: 'Тентовый ангар для хранения грузовых автошин',
    saga: {
      title: 'Каркасно-тентовый ангар. Размеры 22х54х5м.',
      subtitle:
        'Складской ангар для хранения автомобильных покрышек в данном случае.\nУстановлен на железобенный ленточный фундамент.',
      text:
        'В светлое время суток в складе не требуется искусственное освещение.\nПлановый срок монтажа ангара 21 день.',
    },
    photos: [1, 2, 4, 5, 6, 7],
    coordinates: [56.100555, 37.100098],
  },
  {
    // Ябедино КСК
    id: '012',
    name: 'Конно-спортивный комплекс (строится)',
    location: 'д.Ябедино, Московская область',
    description: 'Манеж, конюшни, "бочки", склады сена, летние конюшни.',
    saga: {
      title: 'Строящийся конно-спортивный комплекс в деревне Ябедино Московской области.',
      subtitle:
        'Строительство КСК отличное комплексное решением по организации постоя лошадей частных владельцев и обучению верховой езде.',
      text:
        'Комплекс состоит из конюшен, манежа, бочек, конкурного манежа, шагалки, а также жилых и технических зданий.',
    },
    photos: [6, 7, 8, 9, 15, 16, 18, 17, 23, 12, 13, 14, 11, 10, 19, 20, 22, 21, 1, 3, 4, 5, 2],
    coordinates: [55.905621, 36.795128],
  },
  {
    // Курилово
    id: '013',
    name: 'Торговый павильон 18х26х4м',
    location: 'д.Курилово, Московская область',
    description: 'Каркасно-тентовый торговый павильон.',
    saga: {
      title: 'Каркасно-тентовый торговый павильон. Размеры 22х54х5м.',
      subtitle: 'Ангар для розничной торговли установлен на железобетонное основания служащее полом павильона.',
      text:
        'В светлое время суток в павильоне не требуется искусственное освещение.\nПлановый срок монтажа конструкции 21 день.',
    },
    photos: [7, 4, 5, 6, 1, 2, 3, 8],
    coordinates: [56.100256, 36.912058],
  },
  {
    // Онуфриево
    id: '014',
    name: 'Конно-спортивный комплекс (строится)',
    location: 'д.Онуфриево, Московская область',
    description: 'В комплекс входят манеж, конюшня и вспомогательные сооружения',
    saga: {
      title: 'Строящийся конно-спортивный комплекс в деревне Онуфриево Московской области.',
      subtitle:
        'Строительство КСК отличное комплексное решением по организации постоя лошадей частных владельцев и обучению верховой езде.',
      text: 'Комплекс состоит из конюшен, манежа, а также технических зданий.',
    },
    photos: [12, 9, 10, 7, 8, 3, 4, 5, 6, 1, 2],
    coordinates: [55.845359, 36.495301],
  },
];

export const projectTemplate = {
  id: '',
  preview: '',
  name: '',
  location: '',
  description: '',
  saga: {
    title: '',
    subtitle: '',
    text: '',
  },
  photos: [],
  coordinates: [],
};

export const projectTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  saga: PropTypes.objectOf(PropTypes.string).isRequired,
  photos: PropTypes.arrayOf(PropTypes.number).isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
});