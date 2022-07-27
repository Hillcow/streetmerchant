import {Store} from './store';

export const LibroAt: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    inStock: {
      container: '.listing',
      text: ['cart']
    },
    maxPrice: {
      container: '.listing > .listing__item:first-of-type .product-price',
      euroFormat: true
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
      url: 'https://track.webgains.com/click.html?wgcampaignid=1498775&wgprogramid=282295&wgtarget=https://www.libro.at/gaming/ps5/ps5-konsolen/'
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://tinyurl.com/yxzydtqr'
    },
  ],
  name: 'libro-at'
};
