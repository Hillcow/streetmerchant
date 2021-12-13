import {Store} from './store';

export const Spielegrotte: Store = {
	currency: '€',
	labels: {
		inStock: [
			{
				container: '.alleartikel',
				text: ['konsole']
			}
		],
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.spielegrotte.de/index.php?kat=100056&anr=54288'
		},
		{
			brand: 'sony',
			model: 'ps5 console bundle',
			series: 'sonyps5c',
			url: 'https://spielegrotte.de/index.php?kat=100100&subkat=260'
		},
	],
	name: 'spielegrotte'
};
