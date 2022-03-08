import {Store} from './store';

export const AmazonEs: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['introduzca los caracteres que ve a continuación']
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
      url: 'https://www.amazon.es/dp/B08KKJ37F7?tag=foraumbot-sp-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1&tag=foraumbot-sp-21',
      scrapeUrl: 'https://www.amazon.es/gp/aod/ajax?asin=B08KKJ37F7',
    },
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.es/dp/B08KKJ37F7?tag=foraumbot-sp-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1&tag=foraumbot-sp-21',
      scrapeUrl: 'https://www.amazon.es/gp/aod/ajax?asin=B08KKJ37F7',
    },
    { // ps5 digital
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.amazon.es/dp/B08KJF2D25?tag=foraumbot-sp-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KJF2D25&Quantity.1=1&tag=foraumbot-sp-21',
      scrapeUrl: 'https://www.amazon.es/gp/aod/ajax?asin=B08KJF2D25',
    },
    { // series x
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.es/dp/B08JDSW1ZW?tag=foraumbot-sp-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08JDSW1ZW&Quantity.1=1&tag=foraumbot-sp-21',
      scrapeUrl: 'https://www.amazon.es/gp/aod/ajax?asin=B08JDSW1ZW',
    },
	],
	name: 'amazon-es'
};
