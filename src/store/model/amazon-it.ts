import {Store} from './store';

export const AmazonIt: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: [
				'Inserisci i caratteri visualizzati nello spazio sottostante'
			]
		},
    maxPrice: {
      container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-offscreen:first-of-type',
      euroFormat: true
    },
    outOfStock: {
      container: '#aod-sticky-pinned-offer',
      text: ['Disponibile su invito']
    }
	},
	links: [
    { // TEST
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.it/dp/B08KKJ37F7?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.it/gp/aod/ajax?asin=B08KKJ37F7',
    },
    { // ps5 disc
      brand: 'sony',
      model: 'psportal',
      series: 'psportal',
      url: 'https://www.amazon.it/dp/B0CJJCZMKJ?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B0CJJCZMKJ&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.it/gp/aod/ajax?asin=B0CJJCZMKJ',
      labels: {
        maxPrice: {
          container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-offscreen:first-of-type',
          euroFormat: true
        },
        inStock: [
          {
            container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-soldBy div.a-col-right > *.a-size-small:first-of-type',
            text: ['amazon']
          },
          {
            container: '#aod-pinned-offer #aod-pinned-offer-additional-content #aod-offer-soldBy div.a-col-right > span.a-size-small:first-of-type',
            text: ['amazon']
          },
        ],
      },
    },
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.it/dp/B08KKJ37F7?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.it/gp/aod/ajax?asin=B08KKJ37F7',
      labels: {
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
    },
    { // ps5 horizon bundle
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.it/dp/B0B11RR7TC?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B0B11RR7TC&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.it/gp/aod/ajax?asin=B0B11RR7TC',
      labels: {
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
    },
    { // ps5 gow bundle
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.it/dp/B0BJFLXC3P?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B0BJFLXC3P&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.it/gp/aod/ajax?asin=B0BJFLXC3P',
      labels: {
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
    },
    { // ps5 fifa 23 bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.it/dp/B0BFF37KT4?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B0BFF37KT4&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.it/gp/aod/ajax?asin=B0BFF37KT4',
      labels: {
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
    },
    { // ps5 fifa 23 digital bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://www.amazon.it/dp/B0BFDZGYJK?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B0BFDZGYJK&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.it/gp/aod/ajax?asin=B0BFDZGYJK',
      labels: {
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
    },
    { // ps5 digital
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.it/dp/B08KJF2D25?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KJF2D25&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.it/gp/aod/ajax?asin=B08KJF2D25',
      labels: {
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
    },
    /*
    { // ps5 disc direct
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.it/gp/product/handle-buy-box?ASIN=B08KKJ37F7&quantity=1&submit.buy-now=1&tag=foraumbot-21&offerListingID=mQ7bMceExMRw%2B3MtS9jFAryGMRCx8B8t69DK9f4GQrcx1ZN02b7Wb0gzUvnNq1r3kuhH%2B5v0n4Z8PWq%2FD9J9yH8PEI3kl82cLqxHN%2FM1fE%2BEPpmeuj%2FDQf9TRystmGMNxNmuzO42PW0x13xUo7uc8g%3D%3D',
      labels: {
        inStock: [
          {
            container: '#authportal-center-section > #authportal-main-section form.auth-validate-form h1',
            text: ['accedi']
          }
        ],
        outOfStock: {
          container: '.sc-your-amazon-cart-is-empty',
          text: ['carrello']
        }
      }
    },
    { // ps5 digital direct
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.it/gp/product/handle-buy-box?ASIN=B08KJF2D25&quantity=1&submit.buy-now=1&tag=foraumbot-21&offerListingID=ZLSPw1P5vOjshT7RbeIR2HadlFyDLONFSipTpigxPGxJfFWtJpIk46EpumeTdTG3V20%2BSPNZTm43oySkS5bXJerAJpZJ1IAV%2Bkfv3AMHNOVcGcYB3gaUHOB0%2FlJWMLP6',
      labels: {
        inStock: [
          {
            container: '#authportal-center-section > #authportal-main-section form.auth-validate-form h1',
            text: ['accedi']
          }
        ],
        outOfStock: {
          container: '.sc-your-amazon-cart-is-empty',
          text: ['carrello']
        }
      }
    },
     */
    { // series x
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.it/dp/B08JDSW1ZW?tag=foraumbot-it-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08JDSW1ZW&Quantity.1=1&tag=foraumbot-it-21',
      scrapeUrl: 'https://www.amazon.it/gp/aod/ajax?asin=B08JDSW1ZW',
    },
	],
	name: 'amazon-it'
};
