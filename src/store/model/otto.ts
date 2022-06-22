import {Store} from './store';

export const Otto: Store = {
	currency: '€',
	labels: {
		outOfStock: {
			container: 'body',
			text: [
				'Deinen gewünschten Artikel können wir leider nicht mehr liefern',
			]
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.otto.de/p/playstation-5-medienfernbedienung-1170617135#variationId=1170617136'
		},
    {
      brand: 'sony',
      labels: {
        inStock: [
          {
            container: '.promo_articlelist--container ul.promo_articlelist--articles > li:first-child',
            text: ['>PlayStation 5, ink']
          }
        ],
        maxPrice: {
          container: '.promo_articlelist--container ul.promo_articlelist--articles > li:first-child div.promo_articlelist--price-retail',
          euroFormat: true
        },
      },
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://www.otto.de/technik/gaming/playstation/ps5/'
    },
    /*
    {
      brand: 'microsoft',
      labels: {
        inStock: [
          {
            container:
              '.promo_articlelist--container',
            text: ['xbox series x, inkl.']
          }]
      },
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.otto.de/technik/gaming/xbox/xbox-series-x/'
    },*/
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.otto.de/?selektion=(und.(ist.sortiment.unterhaltungselektronik).(ist.thema.gaming).(sind.kategorien.spielekonsolen.xbox).(~.(v.1)))',
      labels: {
        inStock: [
          {
            container: 'section.tilelist',
            text: ['Series X, inkl.']
          },
        ]
      }
    },
	],
	name: 'otto'
};
