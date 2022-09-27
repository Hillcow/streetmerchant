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
      euroFormat: false
    },
    inStock: [
      {
        container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-soldBy div.a-col-right > *.a-size-small:first-of-type',
        text: ['amazon']
      },
    ],
    outOfStock: {
      container: '#aod-sticky-pinned-offer',
      text: ['invitation']
    }
	},
	links: [
    /*
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.co.uk/dp/B08H95Y452?tag=foraumbot-uk-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08H95Y452&Quantity.1=1&tag=foraumbot-uk-21',
      scrapeUrl: 'https://www.amazon.co.uk/gp/aod/ajax?asin=B08H95Y452',
    },
     */
    { // ps5 digital
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.co.uk/dp/B08H97NYGP?tag=foraumbot-uk-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08H97NYGP&Quantity.1=1&tag=foraumbot-uk-21',
      scrapeUrl: 'https://www.amazon.co.uk/gp/aod/ajax?asin=B08H97NYGP',
    },

    { // ps5 disc + horizon
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.co.uk/dp/B0B11RR7TC?tag=foraumbot-uk-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0B11RR7TC&Quantity.1=1&tag=foraumbot-uk-21',
      scrapeUrl: 'https://www.amazon.co.uk/gp/aod/ajax?asin=B0B11RR7TC',
    },
    { // ps5 digital + horizon
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.amazon.co.uk/dp/B09ZYB72VP?tag=foraumbot-uk-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B09ZYB72VP&Quantity.1=1&tag=foraumbot-uk-21',
      scrapeUrl: 'https://www.amazon.co.uk/gp/aod/ajax?asin=B09ZYB72VP',
    },
    { // ps5 disc fifa 23 bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.co.uk/dp/B0BG3HQZTQ?tag=foraumbot-uk-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0BG3HQZTQ&Quantity.1=1&tag=foraumbot-uk-21',
      scrapeUrl: 'https://www.amazon.co.uk/gp/aod/ajax?asin=B0BG3HQZTQ',
    },
    { // ps5 digital fifa 23 bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://www.amazon.co.uk/dp/B0BG3GRMF9?tag=foraumbot-uk-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0BG3GRMF9&Quantity.1=1&tag=foraumbot-uk-21',
      scrapeUrl: 'https://www.amazon.co.uk/gp/aod/ajax?asin=B0BG3GRMF9',
    },

    /*+
    { // ps5 disc direct
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.co.uk/gp/product/handle-buy-box?ASIN=B08H95Y452&quantity=1&submit.buy-now=1&tag=foraumbot-21&offerListingID=9EYgRjck%2F%2FiW5ikfaGfqGkRXPZN%2FcXdDAqGRWJeARQeyaMq2sFbxnD3vSLnTIFylvLOF6ODTBcA4lPCx7xlbxaJXYH5G1lwyN36%2Fk8nVuO8%3D',
      labels: {
        inStock: [
          {
            container: '#authportal-center-section > #authportal-main-section form.auth-validate-form h1',
            text: ['anmelden']
          }
        ],
        outOfStock: {
          container: '#sc-retail-cart-container h1',
          text: ['einkaufswagen']
        }
      }
    },
    { // ps5 digital direct
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.co.uk/gp/product/handle-buy-box?ASIN=B08H97NYGP&quantity=1&submit.buy-now=1&tag=foraumbot-21&offerListingID=1Ql5AVuDPMD4xTHM%2Fci7BYHxtogV7K%2FU6VzOGiKl%2BiXMw1zMFD8feEKwjnp9ZmHDYsgh5YzDA4vx1BBebak1QlsWTTTpcbZ75tALt3ZKEsat5gczy%2FKk1pBiEdlG8RBp',
      labels: {
        inStock: [
          {
            container: '#authportal-center-section > #authportal-main-section form.auth-validate-form h1',
            text: ['anmelden']
          }
        ],
        outOfStock: {
          container: '#sc-retail-cart-container h1',
          text: ['einkaufswagen']
        }
      }
    },
     */
    { // series x
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.it/dp/B08H93GKNJ?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08H93GKNJ&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.co.uk/gp/aod/ajax?asin=B08H93GKNJ',
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
