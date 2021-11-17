import {Store} from './store';

export const Muller: Store = {
	currency: '€',
	labels: {
		inStock: [
		  {
        container: '.mu-product-cta .mu-button2__content',
        text: ['In den Warenkorb']
		  },
      {
        container: '#lbHeaderP',
        text: ['Warteschlange']
		  },
      {
        container: '#lbHeaderH2',
        text: ['Warteraum']
		  },
		],
		maxPrice: {
			container: '.mu-product-price__price',
			euroFormat: true
		},
		outOfStock: {
			container: '.mu-ps__text',
			text: ['Vielen Dank an alle, die eine PlayStation 5 bestellt haben.']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.mueller.de/p/alpecin-coffein-shampoo-c1-fuer-mehr-haar-568613/'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.mueller.de/p/playstation-5-konsole-2675305/'
		},
    {
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5de',
			url:
				'https://www.mueller.de/p/playstation-5-konsole-digital-edition-2675308/'
		},
	],
	name: 'muller'
};
