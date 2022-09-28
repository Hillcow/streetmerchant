import {Store} from './store';

export const AmazonEs: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['introduzca los caracteres que ve a continuación']
		},
    outOfStock: {
      container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-AGS-Note li a',
      text: [
        'internacionales',
      ]
    }
	},
	links: [
    { // TEST
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.es/dp/B08KKJ37F7?tag=foraumbot-sp-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1&tag=foraumbot-sp-21',
      scrapeUrl: 'https://www.amazon.es/gp/aod/ajax?asin=B08KKJ37F7',
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
      }
    },
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.es/dp/B08KKJ37F7?tag=foraumbot-sp-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KKJ37F7&Quantity.1=1&tag=foraumbot-sp-21',
      scrapeUrl: 'https://www.amazon.es/gp/aod/ajax?asin=B08KKJ37F7',
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
      }
    },
    { // ps5 digital
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.es/dp/B08KJF2D25?tag=foraumbot-sp-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KJF2D25&Quantity.1=1&tag=foraumbot-sp-21',
      scrapeUrl: 'https://www.amazon.es/gp/aod/ajax?asin=B08KJF2D25',
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
        ],
      }
    },
    { // ps5 disc horizon bundle official
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.es/dp/B09ZLMC79L?tag=foraumbot-sp-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B09ZLMC79L&Quantity.1=1&tag=foraumbot-sp-21',
      scrapeUrl: 'https://www.amazon.es/gp/aod/ajax?asin=B09ZLMC79L',
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
      }
    },
    { // ps5 fifa 23 bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.es/dp/B0BFFV77NT?tag=foraumbot-sp-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0BFFV77NT&Quantity.1=1&tag=foraumbot-sp-21',
      scrapeUrl: 'https://www.amazon.es/gp/aod/ajax?asin=B0BFFV77NT',
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
      }
    },
/*
    { // ps5 disc direct
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.es/gp/product/handle-buy-box?ASIN=B09YDT22WT&quantity=1&submit.buy-now=1&tag=foraumbot-sp-21',
      labels: {
        inStock: [
          {
            container: '#authportal-center-section > #authportal-main-section form.auth-validate-form h1',
            text: ['anmelden']
          }
        ],
        outOfStock: {
          container: '#sc-retail-cart-container h1',
          text: ['cesta']
        }
      }
    },
    { // ps5 digital direct
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.amazon.es/gp/product/handle-buy-box?ASIN=B08KJF2D25&quantity=1&submit.buy-now=1&tag=foraumbot-sp-21&offeringID=evScylQGpSPLDZdJBj5uXzBefjCGJ0irYxx%2Fu%2FxirChsx%2F4pnEt82rkjfXSMZa7CY6AnO4906GUJNoAH9sZxHoxXCdTzBPO4nuPDHR0y2GtvnXAGWN5hNySb9CdPCEUM973VD1XPVV8cZaTVgu976w%3D%3D',
      labels: {
        inStock: [
          {
            container: '#authportal-center-section > #authportal-main-section form.auth-validate-form h1',
            text: ['anmelden']
          }
        ],
        outOfStock: {
          container: '#sc-retail-cart-container h1',
          text: ['cesta']
        }
      }
    },
    { // ps5 disc bundle direct
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.es/gp/product/handle-buy-box?ASIN=B09YDT22WT&quantity=1&submit.buy-now=1&tag=foraumbot-sp-21',
      labels: {
        inStock: [
          {
            container: '#authportal-center-section > #authportal-main-section form.auth-validate-form h1',
            text: ['anmelden']
          }
        ],
        outOfStock: {
          container: '#sc-retail-cart-container h1',
          text: ['cesta']
        }
      }
    },
*/
    /*
    { // series x
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.es/dp/B08JDSW1ZW?tag=foraumbot-sp-21&ref=foraum&aod=1',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08JDSW1ZW&Quantity.1=1&tag=foraumbot-sp-21',
      scrapeUrl: 'https://www.amazon.es/gp/aod/ajax?asin=B08JDSW1ZW',
    },
     */
  ],
  name: 'amazon-es'
};
