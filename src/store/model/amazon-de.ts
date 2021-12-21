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
    inStock: [
      {
        container: '#merchant-info',
        text: ['Verkauf und Versand durch Amazon.']
      },
      {
        container: '#merchant-info',
        text: ['Amazon Warehouse']
      }
    ],
    maxPrice: {
      container: '#priceblock_ourprice',
      euroFormat: true
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['Derzeit nicht verfügbar']
      }
    ]
  },
  links: [
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H93ZRK9&Quantity.1=1&tag=o5-21',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['sony playstation 5']
        }
      },
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B08H93ZRK9?tag=o5-21'
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H98GVK8&Quantity.1=1&tag=o5-21',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['sony playstation 5']
        }
      },
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.de/dp/B08H98GVK8?tag=o5-21'
    },
    /*
    {
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
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://amzn.to/3uJda6P',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['xbox series x']
        }
      },
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://amzn.to/3nV9DiC'
    },
  ],
  name: 'amazon-de'
};
