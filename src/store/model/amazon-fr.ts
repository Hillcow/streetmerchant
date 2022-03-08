import {Store} from './store';

export const AmazonFr: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
    maxPrice: {
      container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-price:first-of-type',
      euroFormat: true
    },
    inStock: [
      {
        container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-soldBy div.a-col-right > *.a-size-small:first-of-type',
        text: ['amazon']
      }
    ]
	},
	links: [
    { // TEST
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.fr/dp/B09FBCRKC9?tag=foraumbot-fr-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B09FBCRKC9&Quantity.1=1&tag=foraumbot-fr-21',
      scrapeUrl: 'https://www.amazon.fr/gp/aod/ajax?asin=B09FBCRKC9',
    },
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.fr/dp/B08H93ZRK9?tag=foraumbot-fr-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B08H93ZRK9&Quantity.1=1&tag=foraumbot-fr-21',
      scrapeUrl: 'https://www.amazon.fr/gp/aod/ajax?asin=B08H93ZRK9',
    },
    { // ps5 digital
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.amazon.fr/dp/B08H98GVK8?tag=foraumbot-fr-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B08H98GVK8&Quantity.1=1&tag=foraumbot-fr-21',
      scrapeUrl: 'https://www.amazon.fr/gp/aod/ajax?asin=B08H98GVK8',
    },
    { // series x
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.it/dp/B08JDSW1ZW?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08JDSW1ZW&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.it/gp/aod/ajax?asin=B08JDSW1ZW',
    },
	],
	name: 'amazon-fr'
};
