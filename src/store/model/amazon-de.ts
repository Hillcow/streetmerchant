import {Store} from './store';

export const AmazonDe: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: [
        'geben sie die unten angezeigten zeichen ein',
        'geben sie die zeichen unten ein'
      ]
    },
    outOfStock: {
      container: '#aod-sticky-pinned-offer',
      text: ['Auf Einladung erhältlich']
    },
    maxPrice: {
      container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-offscreen:first-of-type',
      euroFormat: true
    },
  },
  links: [
    { // PSPortal AOD
      brand: 'sony',
      model: 'psportal',
      series: 'psportal',
      url: 'https://www.amazon.de/dp/B0CJJCZMKJ?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0CJJCZMKJ&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0CJJCZMKJ',
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
        ],
        outOfStock: [
          {
            container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-soldBy div.a-col-right > *.a-size-small:first-of-type',
            text: ['Retourenkauf']
          },
        ],
      }
    },
    { // PSPortal OfferId
      brand: 'sony',
      model: 'psportal',
      series: 'psportal',
      url: 'https://www.amazon.de/dp/B0CJJCZMKJ?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      scrapeUrl: 'https://www.amazon.de/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance?ASIN=B0CJJCZMKJ&quantity=1&submit.buy-now=1&offeringID=4vTAQtRot5G7c7Kbj97C5GdAC%2BEfCaHePthj3iG%2FpRHqCzUIuybqMh8I03SwroliJprkpTSb0bHv%2F9MBu4N%2FgW0Zyefo1ZZILjVIg7hVDygG0tTNH4dBBF6vPlqKdiuymOE%2BxoO%2FgZw%3D',
      labels: {
        inStock: [
          {
            container: '#authportal-center-section > #authportal-main-section form.auth-validate-form h1',
            text: ['Anmelden']
          }
        ],
        outOfStock: {
          container: 'table td',
          text: ['Tut uns leid:']
        }
      }
    },
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B08H93ZRK9?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H93ZRK9&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B08H93ZRK9',
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
        ],
      }
    },
    { // ps5 digital
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.de/dp/B08H98GVK8?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H98GVK8&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B08H98GVK8',
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
        ],
      }
    },
    { // ps5 disc + 2ter controller
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B0BRQCBK2W?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0BRQCBK2W&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0BRQCBK2W',
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
        ],
      }
    },
    { // FIFA 23 Disc Bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B0BFFTFBR2?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0BFFTFBR2&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0BFFTFBR2',
      labels: {
        maxPrice: {
          container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-offscreen:first-of-type',
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
    { // FIFA 23 Disc Bundle + GT7
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B0BG2L1MBW?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0BG2L1MBW&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0BG2L1MBW',
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
        ],
      }
    },
    { // PS5 + FIFA 23 DualSense Bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B0BJQWTZB2?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0BJQWTZB2&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0BJQWTZB2',
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
        ],
      }
    },
    { // PS5 Digital + FIFA 23 + Pulse 3D white
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://www.amazon.de/dp/B0BMWDBXFS?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0BMWDBXFS&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0BMWDBXFS',
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
        ],
      }
    },
    { // PS5 Digital + FIFA 23 + Pulse 3D BLACK
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://www.amazon.de/dp/B0BMWDKD38?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0BMWDKD38&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0BMWDKD38',
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
        ],
      }
    },
    { // PS5 GoW Ragnarök Bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B0BK9MC6QM?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0BK9MC6QM&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0BK9MC6QM',
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
        ],
      }
    },
    { // PS5 GoW Ragnarök Digital Bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://www.amazon.de/dp/B0BK9KCLN9?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0BK9KCLN9&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0BK9KCLN9',
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
        ],
      }
    },
    /*
    { // ps5 horizon bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B0B1MPZWJG?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0B1MPZWJG&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0B1MPZWJG',
      labels: {
        maxPrice: {
          container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-offscreen:first-of-type',
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
     */
    { // ps5 digital horizon bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://www.amazon.de/dp/B0B3569WSX?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0B3569WSX&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0B3569WSX',
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
        ],
      }
    },
    /*
    { // ps5 horizon + controller
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B0B3ZDFMT4?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0B3ZDFMT4&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0B3ZDFMT4',
      labels: {
        maxPrice: {
          container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-offscreen:first-of-type',
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
    { // ps5 disc + controller
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B0B2KQ1RGY?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0B2KQ1RGY&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0B2KQ1RGY',
      labels: {
        maxPrice: {
          container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-offscreen:first-of-type',
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
    { // ps5 digital + controller
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://www.amazon.de/dp/B0B2KRD9ZK?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0B2KRD9ZK&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B0B2KRD9ZK',
      labels: {
        maxPrice: {
          container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-offscreen:first-of-type',
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
    /*
    { // ps5 disc direct
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/gp/product/handle-buy-box?ASIN=B08H93ZRK9&quantity=1&submit.buy-now=1&tag=foraumbot-21&offeringID=4fCax10PXMfkQu%2FngQ9UWWHpsJCxI8pyBZhtN%2FvMgFfktwdH51sbeG5exonhQTq9xgUZxovIpIV1bk2v3WGpZBXLYuuTfeu5Du9PnmTfD%2BP5EinSAfKR9eN26DMq96qUTenSB5LlGIY%3D',
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
      url: 'https://www.amazon.de/gp/product/handle-buy-box?ASIN=B08H98GVK8&quantity=1&submit.buy-now=1&tag=foraumbot-21&offeringID=8vycpXTovdMRRLTo8Oznyf%2Bi3d0Y6%2FSSrWG%2B1xqnMPPASq1DFOnfTV%2FVeHhCElQuB1FSmdbHKD2Em5AprIKs0lDtuPg3CMMbtS10VaTK0OPNgv4hh%2B%2BB7O%2B2h8JrFme0kUmT08CRX6o%3D',
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
    { // ps5 horizon bundle direct
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.de/gp/product/handle-buy-box?ASIN=B09QG2JZYS&quantity=1&submit.buy-now=1&tag=foraumbot-21&offerListingID=Ry2gKu2Y1l91WCwJvW1xGPBAdfUdF1rY8SPPJVha67WhvZirAc7SFd9OVXJZZKjOGTx9E4SqxQRW%2BdYcF77hrmWRWMijhHIHXCP0LPdVXuqV4%2Fb9s1ZV7Q%2FFHJMXi04Kd3QQVf7v0XWni08Tzr2aIQ%3D%3D',
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

    { // horizon forbidden west bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B09QG2JZYS?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B09QG2JZYS&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B09QG2JZYS',
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
        ],
      }
    },
    /*
    { // rift apart bundle
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://amzn.to/3h3I7hc'
    },

     */
    /*
    { // neues modell
      brand: 'sony',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['PS5']
        }
      },
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://amzn.to/3zJt98b'
    },

     */
    { // xbox series x
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.de/dp/B08H93ZRLL?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      //url: 'https://www.amazon.de/gp/product/handle-buy-box?ASIN=B08H93ZRLL&quantity=1&submit.buy-now=1&tag=foraumbot-21&offerListingID=Uo7qKr%2FfAadHITTkDS7Si4UJG%2FWkRQPrYv5tcha3rFNHQXOa9aX6mHmD6V%2BW8YxC4m%2B9D9uhuyZCDofIwfB70m0bTqjkYZd%2FcJGfRSX%2BvlL%2BYOUW8%2Fl8K1RlT5f0VyCvrESq4I1YyEo%3D',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H93ZRLL&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B08H93ZRLL',
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
        ],
      }
    },
    { // test aod = 1 offers
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.de/dp/B08QF6F7TD?tag=foraumbot-21&ref=foraum&aod=1',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B08QF6F7TD',
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
        ],
      }
    },
    { // test direct buy link
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.de/gp/product/handle-buy-box?tag=frmwb-21&ASIN=B08QF6F7TD&quantity=1&submit.buy-now=1',
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
  ],
  name: 'amazon-de'
};
