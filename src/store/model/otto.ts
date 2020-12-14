import {Store} from './store';

export const Otto: Store = {
	labels: {
		inStock: [
			{
				container:
					'button.prd_ordering__button.p_btn150--1st.js_product_addToBasket',
				text: ['In den Warenkorb']
			}
		],
		maxPrice: {
			container: '#normalPriceAmount',
			euroFormat: true
		},
		outOfStock: {
			container: 'div.p_message.p_message--hint > strong',
			text: [
				'Deinen gewünschten Artikel können wir leider nicht mehr liefern'
			]
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.otto.de/p/playstation-5-medienfernbedienung-1170617135#variationId=1170617136'
		},
		{
			brand: 'sony',
			labels: {
				inStock: {
					container:
						'.js_shortInfo__variationName.prd_shortInfo__variationName',
					text: ['konsole']
				}
			},
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://t.co/SLiVVqbc4M?amp=1'
		},
		{
			brand: 'sony',
			labels: {
				inStock: {
					container:
						'.js_shortInfo__variationName.prd_shortInfo__variationName',
					text: ['konsole']
				}
			},
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://bit.ly/3mHJN1X'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url:
				'https://www.otto.de/p/xbox-series-s-1229056876/#variationId=1229056877'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url:
				'https://tidd.ly/2JZEmNs'
		}
	],
	name: 'otto'
};
