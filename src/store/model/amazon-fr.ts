import {Store} from './store';

export const AmazonFr: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
	},
	links: [
    { // TEST
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.fr/dp/B09FBCRKC9?tag=foraumbot-fr-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B09FBCRKC9&Quantity.1=1&tag=foraumbot-fr-21',
      scrapeUrl: 'https://www.amazon.fr/gp/aod/ajax?asin=B09FBCRKC9',
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
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.fr/dp/B08H93ZRK9?tag=foraumbot-fr-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B08H93ZRK9&Quantity.1=1&tag=foraumbot-fr-21',
      scrapeUrl: 'https://www.amazon.fr/gp/aod/ajax?asin=B08H93ZRK9',
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
      url: 'https://www.amazon.fr/dp/B08H98GVK8?tag=foraumbot-fr-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B08H98GVK8&Quantity.1=1&tag=foraumbot-fr-21',
      scrapeUrl: 'https://www.amazon.fr/gp/aod/ajax?asin=B08H98GVK8',
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
      url: 'https://www.amazon.fr/gp/product/handle-buy-box?ASIN=B08H93ZRK9&quantity=1&submit.buy-now=1&tag=foraumbot-21&offerListingID=pThpWcRbF8wy%2BXCdHKStJSLkf30H66EUFociejGDQ2RpBFsoC95CcT8eppl18OBpurRd8qM4%2B7Vc9EmN%2Bnp9GWraSedQ7g0UmG1gUtiH62U%3D',
      labels: {
        inStock: [
          {
            container: '#authportal-center-section > #authportal-main-section form.auth-validate-form h1',
            text: ['identifier']
          }
        ],
        outOfStock: {
          container: '.sc-your-amazon-cart-is-empty',
          text: ['panier']
        }
      }
    },
    { // ps5 digital direct
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.fr/gp/product/handle-buy-box?ASIN=B08H98GVK8&quantity=1&submit.buy-now=1&tag=foraumbot-21&offerListingID=MhaoX0MS6zqXHuAfjL21gSvenyb5HlZhcS%2BR46%2FZ5UGjiCvbP16DyJWVETPpy10GYOmvTtBjtpwl5fTC%2FP3aWaNIB88WBFb%2F8VHLJ%2B0ColLp2NDlCvuwxrwxUwZbcuEJv7BcT2jniLs%3D',
      labels: {
        inStock: [
          {
            container: '#authportal-center-section > #authportal-main-section form.auth-validate-form h1',
            text: ['identifier']
          }
        ],
        outOfStock: {
          container: '.sc-your-amazon-cart-is-empty',
          text: ['panier']
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
	name: 'amazon-fr'
};
