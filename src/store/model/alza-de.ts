import {Store} from './store';

export const AlzaDe: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    inStock: [
      {
        container: '.browsingitemcontainer .canwatchdog',
        text: ['kaufen']
      }
    ],
    maxPrice: {
      container: '.priceInner > span.c2',
      euroFormat: true
    },
  },
  links: [
    { // xbox series x overview
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.alza.de/gaming/xbox-series-spielkonsolen/18878877.htm?idp=13871&banner_id=41107#f&cst=null&cud=0&pg=1&prod=&par13844=13844-239786339'
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.alza.at/gaming/playstation-5-spiele/18876713.htm?idp=13871&banner_id=41107'
    },
  ],
  name: 'alza-de'
};
