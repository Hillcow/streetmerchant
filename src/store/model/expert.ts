import {Store} from './store';

export const Expert: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '€',
	labels: {
		inStock: [
			{
				container: 'span.widget-ArticleStatus-buttonText',
				text: ['In den Warenkorb']
			}
		],
		maxPrice: {
			container:
				'.widget-Container-subContent .widget-ArticlePrice-price',
			euroFormat: false
		},
		outOfStock: [
			{
				container:
					'span[style="font-size: 14pt;"] > span[style="color: #ff5e19;"]',
				text: ['Das von Ihnen ausgewählte Produkt ist ausverkauft']
			},
			{
				container: 'span.widget-ArticleStatus-statusPointText',
				text: ['Artikel ist derzeit nicht verfügbar']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.expert.de/shop/11364114744-ps4-pro-1tb-jet-black.html'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://tinyurl.com/y3mchd3z'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://tinyurl.com/y2krqo5g'
		},
    /*
    {
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://tinyurl.com/y6rsapfd'
    },
    {
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://tinyurl.com/y4tnj7es'
    },*/
    { // rift apart + nioh
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://tinyurl.com/yzrc5y3x'
    },
    { // rift apart + controller
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://tinyurl.com/ygy23adl'
    },
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://tinyurl.com/yxo9yxe8'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.expert.de/shop/11350018530-xbox-series-s.html'
		}
	],
	name: 'expert'
};
