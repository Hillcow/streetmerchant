import {Store} from './store';

export const Libro: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    inStock: {
      container: 'body',
      text: ['addToCart']
    },
    outOfStock: [
      {
        container: '.no-products-found__wrapper',
        text: ['KEINE PRODUKTE GEFUNDEN']
      }
    ]
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://tinyurl.com/yxzydtqr'
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://tinyurl.com/yxzydtqr'
    },
  ],
  name: 'libro'
};
