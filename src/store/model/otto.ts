import {Store} from './store';

export const Otto: Store = {
	currency: '€',
	labels: {
		inStock: [
			{
				container:
					'button.prd_ordering__button.p_btn150--1st.js_product_addToBasket',
				text: ['In den Warenkorb']
			},
      {
				container:
					'.promo_articlelist--articles.promo_articlelist--tile-container',
				text: ['inkl. 2. DualSense']
			},
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
				'https://www.otto.de/p/playstation-5-1136008456/#variationId=1136008459'
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
				'https://www.otto.de/p/playstation-5-digital-edition-1162264145/#variationId=1162266935'
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
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.otto.de/technik/gaming/playstation/ps5/'
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.otto.de/p/xbox-series-x-1229057353'
    },
	],
	name: 'otto'
};
