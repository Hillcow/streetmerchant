import {Store} from './store';

export const GamestopDE: Store = {
	labels: {
		inStock: [
			{
				container: '#btnAddToCart',
				text: ['In den Warenkorb']
			},
			{
				container: '#btnAddToCart',
				text: ['Vorbestellen']
			}
		],
		maxPrice: {
			container: '.buySection .prodPriceCont',
			euroFormat: true
		},
		outOfStock: {
			container: '.megaButton',
			text: ['Nicht verfügbar']
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://clk.tradedoubler.com/click?p=304698&a=3195372&url=https%3A%2F%2Fwww.gamestop.de%2FPS5%2FGames%2F58665'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://clk.tradedoubler.com/click?p=304698&a=3195372&url=https%3A%2F%2Fwww.gamestop.de%2FPS5%2FGames%2F60315'
		}
	],
	name: 'gamestop-de',
	successStatusCodes: [[0, 399], 404]
};
