import {Store} from './store';

export const AlzaDe: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['Bitte bestätigen Sie, dass Sie ein Mensch sind']
    },
    inStock: [
      {
        container: '.js-buy-button',
        text: ['kaufen']
      },
      {
        container: '.js-buy-button',
        text: ['reservieren']
      },
    ],
    maxPrice: {
      container: '.priceInner > span.c2',
      euroFormat: true
    },
  },
  links: [
    { // xbox series x overview
      brand: 'sony',
      model: 'psportal',
      series: 'psportal',
      url: 'https://www.alza.de/gaming/playstation-portal-remote-player-d8550199.htm'
    },
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
      url: 'https://www.alza.de/gaming/avatar-frontiers-of-pandora-ps5-d6546437.htm'
    },
  ],
  name: 'alza-de'
};
