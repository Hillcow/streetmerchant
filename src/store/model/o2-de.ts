import {Store} from './store';

export const O2De: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    maxPrice: {
      container: '.price',
      euroFormat: true
    },
    inStock: [
      {
        container: '.container-fluid > .row.ng-scope h2',
        text: ['Sony PlayStation®5']
      }
    ],
  },
  links: [
    { // horizon forbidden west bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.communicationads.net/tc.php?t=12679C16032500T&deeplink=https%3A%2F%2Fwww.o2online.de%2Fe-shop%2Fsony',
    },
  ],
  name: 'o2-de'
};
