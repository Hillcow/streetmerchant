import {Link, Store} from './store';

export const AmazonUk: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '£',
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
      }
    ]
	},
	links: [
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.co.uk/dp/B08H95Y452?tag=foraumbot-uk-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08H95Y452&Quantity.1=1&tag=foraumbot-uk-21',
      scrapeUrl: 'https://www.amazon.co.uk/gp/aod/ajax?asin=B08H95Y452',
    },
    { // ps5 digital
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.amazon.co.uk/dp/B08H97NYGP?tag=foraumbot-uk-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08H97NYGP&Quantity.1=1&tag=foraumbot-uk-21',
      scrapeUrl: 'https://www.amazon.co.uk/gp/aod/ajax?asin=B08H97NYGP',
    },
    { // TEST
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.co.uk/dp/B09FBCRKC9?tag=foraumbot-uk-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B09FBCRKC9&Quantity.1=1&tag=foraumbot-uk-21',
      scrapeUrl: 'https://www.amazon.co.uk/gp/aod/ajax?asin=B09FBCRKC9',
    },
	],
	name: 'amazon-uk'
};
