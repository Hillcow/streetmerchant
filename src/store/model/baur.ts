import {Store} from './store';

export const Baur: Store = {
	currency: '€',
	labels: {
		inStock: [
			{
				container:
					'.MuiGrid-root > button.MuiButton-containedPrimary',
				text: ['In den Warenkorb legen']
			},
		],
		maxPrice: {
			container: '.MuiGrid-grid-xs-12 > div > .MuiTypography-root.MuiTypography-h4',
			euroFormat: true
		},
		outOfStock: {
			container: 'body',
			text: [
				'Entschuldigung, die gesuchte Seite konnte leider nicht gefunden werden'
			]
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.baur.de/p/loreal-paris-men-expert-deo-spray-fresh-extreme/AKLBB684880574?sku=3415152837-0-684880574&nav-pd=true#sku=3415152837-0-684880574&nav-pd=true&nav-i=1&nav-q=deo&nav-p=P1',
      labels: {
        inStock: {
          container: 'h1',
          text: ['Deo-Spray']
        }
      },
		},
    {
      brand: 'sony',
      model: 'psportal',
      series: 'psportal',
      url: 'https://www.baur.de/p/AKLBB1790587333',
    },
    {
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://tidd.ly/3y0qEgY',
    },
    /*
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: ''
    },

     */
	],
	name: 'baur'
};
