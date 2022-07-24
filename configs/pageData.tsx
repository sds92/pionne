export const MENU = {
  LG: {
    items: [
      ['Все товары', 'products'],
      ['О нас', 'about'],
      ['Logo', ''],
      ['Контакты', 'contacts'],
      ['Доставка', 'delivery'],
    ],
  },
  SM: [
    {
      title: 'Продукты',
      items: [
        ['Все товары', 'products', 'all'],
        ['Для лица', 'products', 'face'],
        ['Для тела', 'products', 'body'],
        ['Для волос', 'products', 'hair'],
      ],
    },
    {
      title: 'Ссылки',
      items: [
        ['О компании', 'about'],
        ['Доставка и оплата', 'delivery'],
        ['Контакты', 'contacts'],
        ['Публичная оферта', 'public'],
        ['Политика конфиденциальности', 'confidential'],
      ],
    },
  ],
};

export const MAIN_PAGE = {
  title: 'Создаем настоящую натуральную косметику для вашей кожи',
  sliderMenu: ['Все', 'Для лица', 'Для тела', 'Для волос'],
};

export const ABOUT_PAGE = {
  title: 'Философия Pionne',
  breadCrumbs: [
    ['Главная', '/'],
    ['О нас', 'about'],
  ],
  blocks: [
    {
      title: 'Работаем по собственной рецептуре',
      text: 'Работаем по собственной рецептуре Используем только натуральные и "зеленые" компоненты Производим косметику исключительно под заказ Работаем по собственной рецептуре Используем только натуральные и "зеленые" компоненты',
    },
    {
      title: 'Производим косметику исключительно под заказ',
      text: 'Работаем по собственной рецептуре Используем только натуральные и "зеленые" компоненты Производим косметику исключительно под заказ Работаем по собственной рецептуре Используем только натуральные',
    },
    {
      title: 'Используем только натуральные и "зеленые" компоненты',
      text: 'Работаем по собственной рецептуре Используем только натуральные и "зеленые" компоненты Производим косметику исключительно под заказ Работаем по собственной рецептуре Используем только натуральные',
    },
  ],
  consultations: {
    title: 'Консультация',
    text: 'Работаем по собственной рецептуре Используем только натуральные и "зеленые" компоненты Производим косметику исключительно под заказ',
  },
  production: {
    title: 'Изготовление',
    text: 'Работаем по собственной рецептуре Используем только натуральные и "зеленые" компоненты Производим косметику исключительно под заказ Работаем по собственной рецептуре Используем ',
  },
  package: {
    title: 'Упаковка',
    text: 'Работаем по собственной рецептуре Используем только натуральные и "зеленые" компоненты Производим косметику исключительно под заказ ',
  },
};

export const CONTACTS_PAGE = {
  title: 'Контакты',
  breadCrumbs: [
    ['Главная', '/'],
    ['Контакты', '/contatcs'],
  ],
};

export const CART_PAGE = {
  title: 'Корзина',
  breadCrumbs: [
    ['Главная', '/'],
    ['Корзина', '/cart'],
  ],
}
