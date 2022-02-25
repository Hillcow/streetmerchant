import {Store} from './store';

export const Amazon: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '$',
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
    maxPrice: {
      container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-offscreen:first-of-type',
      euroFormat: true
    },
    inStock: [
      {
        container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-soldBy a:first-of-type',
        text: ['amazon']
      }
    ],
    outOfStock: [
      {
        container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-soldBy a:first-of-type',
        text: ['warehouse']
      },
    ]
	},
	links: [
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.com/dp/B09DFCB66S?tag=foraumbot-us-20&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B09DFCB66S&Quantity.1=1&tag=foraumbot-us-20',
      scrapeUrl: 'https://www.amazon.com/gp/aod/ajax?asin=B09DFCB66S',
    },
    { // ps5 digital
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.amazon.com/dp/B09DFHJTF5?tag=foraumbot-us-20&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B09DFHJTF5&Quantity.1=1&tag=foraumbot-us-20',
      scrapeUrl: 'https://www.amazon.com/gp/aod/ajax?asin=B09DFHJTF5',
    },
	],
	name: 'amazon'
};
