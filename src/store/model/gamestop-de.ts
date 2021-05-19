import {Store} from './store';

export const GamestopDE: Store = {
	currency: '€',
	labels: {
		inStock: [
			{
				container: '#btnAddToCart',
				text: ['In den Warenkorb']
			},
      {
        container: 'body',
        text: ['Waiting Room']
      },
      {
        container: 'body',
        text: ['gs-logo.jpg']
      },
      {
        container: 'body',
        text: ['/INTL/']
      },
		],
		outOfStock: {
			container: '.megaButton',
			text: ['Nicht verfügbar']
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'test:series',
			url: 'file:///Users/fabianr/Downloads/GameStop%20Germany%20-%20Waiting%20Room.html'
		},
    {
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.gamestop.de/PS5/Games/58665'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.gamestop.de/XboxSeries/Games/56357'
		},
	],
	name: 'gamestop-de',
	successStatusCodes: [[0, 399], 404]
};
