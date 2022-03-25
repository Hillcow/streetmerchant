import {Store} from './store';

export const AlzaAt: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    inStock: [
      {
        container: '.price',
        text: ['kaufen']
      }
    ],
    maxPrice: {
      container: '.priceInner > span:nth-of-type(2)',
      euroFormat: true
    },
  },
  links: [
    { // ps5 overview *neu*
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.alza.at/gaming/playstation-5-spielkonsolen/18876712.htm?idp=13871&banner_id=41107'
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.alza.at/gaming/playstation-5-spiele/18876713.htm?idp=13871&banner_id=41107'
    },
  ],
  name: 'alza-at'
};
