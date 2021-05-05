import {Store} from './store';

export const SmythsToysDE: Store = {
	currency: '€',
	labels: {
		inStock: {
			container: '.green-check',
			text: ['auf lager']
		},
		outOfStock: {
			container: '#addToCartForm > div.st-layout.no-pointer.delTypeSection > div > div > p',
			text: ['Ausverkauft']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.smythstoys.com/de/de-de/gaming/nintendo/nintendo-switch/nintendo-switch-spiele/nintendo-switch-mario-kart-8-deluxe/p/8012908'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.smythstoys.com/de/de-de/gaming/playstation/playstation-5-konsole-und-zubeh%c3%b6r/sony-playstation-5-konsole/p/195650'
		},
    /*
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.smythstoys.com/de/de-de/gaming/playstation/playstation-5-konsole-und-zubeh%c3%b6r/sony-playstation-5-konsole-digital-edition/p/195651'
		}*/
	],
	name: 'smythstoys-de',
};
