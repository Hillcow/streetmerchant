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
    maxPrice: {
      container: '#aod-offer-list > #aod-offer:first-of-type > #aod-offer-price span.a-offscreen:first-of-type',
      euroFormat: true
    },
    inStock: [
      {
        container: '#merchant-info',
        text: ['Verkauf und Versand durch Amazon.']
      },
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
    { // horizon forbidden west bundle
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B09QG2JZYS?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B09QG2JZYS&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B09QG2JZYS',
    },
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B08H93ZRK9?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H93ZRK9&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B08H93ZRK9',
    },
    { // ps5 digital
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B08H98GVK8?tag=foraumbot-21&ref=foraum&language=de_DE&aod=1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H98GVK8&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B08H98GVK8',
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
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H93ZRLL&Quantity.1=1&tag=foraumbot-21',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B08H93ZRLL',
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.de/dp/B08QF6F7TD?tag=foraumbot-21&ref=foraum&aod=1',
      scrapeUrl: 'https://www.amazon.de/gp/aod/ajax?asin=B08QF6F7TD',
    },
  ],
  name: 'amazon-de'
};
