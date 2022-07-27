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
			url: 'https://www.expert.de/shop/unsere-produkte/gaming-freizeit/sony-playstation/playstation-konsolen'
		},
    /*
    { // ps5 + rift apart + midnight black controller
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://tinyurl.com/yfr44e2w'
    },
    { // ps5 + returnal + midnight black controller
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://tinyurl.com/yfzzxm7z'
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
    },
    { // returnal + controller black
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://tinyurl.com/yfzzxm7z'
    },
    { // digital + kopfhörer
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://tinyurl.com/ygf8l3bo'
    },
    { // digital + kamera
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://tinyurl.com/ygpr7jaq'
    },
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
    { // disk + got
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://tinyurl.com/yje386jt'
    },
    { // controller black + mf
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://tinyurl.com/yezt6omh'
    },
    { // rift apart + controller black
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://tinyurl.com/yfr44e2w'
    },
    { // f1 2021 + controller black
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://tinyurl.com/yejxbh5w'
    },

     */
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
