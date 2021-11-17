import {Store} from './store';

export const EuronicsDE: Store = {
	currency: '€',
	labels: {
		inStock: [
		  {
        container: '.buy-btn--cart-text',
        text: ['Warenkorb']
		  },
      {
        container: 'body',
        text: ['Warteschlange']
      },
      {
        container: '.text-image h1',
        text: ['Wählen Sie das gewünschte Produkt aus']
      }
		]
    ,
		maxPrice: {
			container: '.price--content',
			euroFormat: true
		},
		outOfStock: [
      {
        container:
          '.product--buybox .alert.is--error.is--rounded .alert--content',
        text: [
          'Artikel steht derzeit nicht zur Verfügung',
          'Morgen im Laufe des Morgens und nur online unter'
        ]
		  },
      {
        container:
          'body',
        text: [
          'Leider ist das gewünschte Produkt bereits vergriffen'
        ]
      },
    ]
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.euronics.de/telefon-und-navigation/festnetz/schnurlose-telefone/kx-tg6721gb-schnurlostelefon-mit-anrufbeantworter-schwarz-4051168442801'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url:
				'https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/xbox-series-x/spielekonsole/xbox-series-s-512gb-konsole-4061856838076'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url:
				'https://tidd.ly/2IKk75H'
		},
    { // ÜBERSICHT
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://tidd.ly/37P0RwK'
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://tidd.ly/3FnYfol'
    },
    /*
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://tidd.ly/3myxsg4'
		},
    { // rift apart
			brand: 'sony',
			model: 'ps5 console bundle',
			series: 'sonyps5c',
			url:
				'https://tidd.ly/3iQCQf1'
		},
    { // ghost of tsushima
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url:
        'https://tidd.ly/2W3FSna'
    },*/
	],
	name: 'euronics-de'
};
