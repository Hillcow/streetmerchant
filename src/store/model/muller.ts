import {Store} from './store';

export const Muller: Store = {
	currency: '€',
	labels: {
		outOfStock: [
      {
        container: '.mu-ps__text',
        text: ['Vielen Dank an alle, die eine PlayStation 5 bestellt haben.']
      },
      {
        container: '.mu-availability-box',
        text: ['Nicht lieferbar']
      },
		],
    maxPrice: {
      container: '.mu-product-price__price',
      euroFormat: true
    },
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.mueller.de/p/alpecin-coffein-shampoo-c1-fuer-mehr-haar-568613/'
		},
    /*
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
		},*/

    {
			brand: 'sony',
			model: 'psportal',
			series: 'psportal',
			url: 'https://www.mueller.de/p/ps5-playstation-portal-remote-player-IPN2957060/',
      labels: {
        inStock: [
          {
            container: '.mu-product-cta .mu-button2__content',
            text: ['In den Warenkorb']
          },
          {
            container: '.mu-product-bundles__headline',
            text: ['Empfohlene Kombinationen']
          },
        ],
      },
		},

    {
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.mueller.de/p/playstation-5-konsole-2675305/',
      labels: {
        inStock: [
          {
            container: '.mu-product-cta .mu-button2__content',
            text: ['In den Warenkorb']
          },
          {
            container: '.mu-product-bundles__headline',
            text: ['Empfohlene Kombinationen']
          },
          {
            container: '#lbHeaderP',
            text: ['Warteschlange']
          },
          {
            container: '#lbHeaderP',
            text: ['Wartenummer']
          },
          {
            container: '#lbHeaderH2',
            text: ['Warteraum']
          },
          {
            container: '#lbHeaderH2',
            text: ['Wartenummer']
          },
        ],
        maxPrice: {
          container: '.mu-product-bundles__details .mu-product-price__price',
          euroFormat: true
        },
      },
		},
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.mueller.de/p/playstation-5-konsole-mit-laufwerk-mit-fifa-23-2858667/',
      labels: {
        inStock: [
          {
            container: '.mu-product-cta .mu-button2__content',
            text: ['In den Warenkorb']
          },
          {
            container: '.mu-product-bundles__headline',
            text: ['Empfohlene Kombinationen']
          },
          {
            container: '#lbHeaderP',
            text: ['Warteschlange']
          },
          {
            container: '#lbHeaderP',
            text: ['Wartenummer']
          },
          {
            container: '#lbHeaderH2',
            text: ['Warteraum']
          },
          {
            container: '#lbHeaderH2',
            text: ['Wartenummer']
          },
        ],
        maxPrice: {
          container: '.mu-product-bundles__details .mu-product-price__price',
          euroFormat: true
        },
      },
    },
    {
			brand: 'sony',
			model: 'ps5 console bundle',
			series: 'sonyps5c',
			url: 'https://www.mueller.de/search/?q=Ps5&sortBy=pricedesc',
      labels: {
        inStock: [
            {
              container: '.mu-product-list__items:first-child div.mu-product-tile__name',
              text: ['playstation 5 konsole']
            },
            {
              container: '.mu-product-cta .mu-button2__content',
              text: ['In den Warenkorb']
            },
            {
              container: '#lbHeaderP',
              text: ['Warteschlange']
            },
            {
              container: '#lbHeaderP',
              text: ['Wartenummer']
            },
            {
              container: '#lbHeaderH2',
              text: ['Warteraum']
            },
            {
              container: '#lbHeaderH2',
              text: ['Wartenummer']
            },
          ],
        maxPrice: {
          container: '.mu-product-list__items:first-child span.mu-product-tile__price',
          euroFormat: true
        },
      },
		},
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'test:series',
      url:
        'https://www.mueller.de/search/?q=Ps5&sortBy=pricedesc',
      labels: {
        inStock: [
          {
            container: '.mu-product-list__items:first-child div.mu-product-tile__name',
            text: ['Wireless-Controller']
          },
        ],
        maxPrice: {
          container: '.mu-product-list__items:first-child span.mu-product-tile__price',
          euroFormat: true
        },
      },
    },
	],
	name: 'muller'
};
