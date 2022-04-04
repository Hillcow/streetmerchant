import {Store} from './store';

export const Kaufland: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '€',
	labels: {
		maxPrice: {
			container: '.rd-buybox__price-container > .rd-buybox__price',
			euroFormat: true
		},
    inStock: [
      {
        container: 'button.rd-info-cards__button > .rd-info-cards__bold',
        text: ["Verkäufer: Kaufland"]
      }
    ],
	},
	links: [
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.kaufland.de/product/384347866/'
    },
    { // ps5 + horizon
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.kaufland.de/product/428893626/'
    },
	],
	name: 'kaufland'
};
