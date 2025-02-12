import {Store} from './store';

export const Medimax: Store = {
  currency: '€',
  labels: {
    inStock: [
      {
        container: '.cmsproductlist-name-link',
        text: ['PlayStation 5 825GB SSD']
      },
    ],
    maxPrice: {
      container: '.priceOfProduct',
      euroFormat: true
    },
    outOfStock: {
      container: '.content .large',
      text: ['Ihr MEDIMAX Team']
    }
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.medimax.de/p/1311642/drivesmart-51-lmt-d-ce'
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.medimax.de/c/brand_03112/marken/playstation?q=:price-desc:hasStock:true&startPrice=450.00&endPrice=800.00&minPrice=450&maxPrice=800&ref=Foraum',
      //url: 'https://www.medimax.de/search?sort=price-desc&q=PlayStation+5%3Arelevance%3Abrand%3Abrand_03112&ref=Foraum',
      //url: 'https://www.medimax.de/c/859/computer-gaming/spielekonsolen-spiele/playstation?sort=price-desc&ref=Foraum&hasStock=true',
      labels: {
        inStock: [
          {
            container: '.cmsproductlist-desktop-layout-item:first-of-type .cmsproductlist-description-link',
            text: ['Playstation 5 mit']
          },
          {
            container: '.cmsproductlist-desktop-layout-item:first-of-type .cmsproductlist-description-link',
            text: ['PlayStation®5-Konsole']
          },
          {
            container: '.cmsproductlist-desktop-layout-item:first-of-type .cmsproductlist-description-link',
            text: ['Playstation 5 Digital Edition']
          },
          {
            container: '.cmsproductlist-desktop-layout-item:first-of-type .cmsproductlist-name-link',
            text: ['PS5 inkl.']
          },
          {
            container: '.cmsproductlist-desktop-layout-item:first-of-type .cmsproductlist-name-link',
            text: ['PS5 Digital Edition']
          },
          {
            container: '.cmsproductlist-desktop-layout-item:first-of-type .cmsproductlist-name-link',
            text: ['PS5 Laufwerk']
          },
        ]
      },
    },
    /*
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.medimax.de/p/1315336/play-station-5-825gb-ssd'
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.medimax.de/p/1315337/play-station-5-digital-edition-825gb-ssd'
    },
    {
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url:
        'https://www.medimax.de/p/1343017/playstation-5-825gb-ssd-ratchet-clank-rift'
    }*/
  ],
  name: 'medimax'
};
