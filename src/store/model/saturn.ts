import {Store} from './store';

export const Saturn: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '€',
	labels: {
		captcha: {
			container: 'p',
			text: ['Das ging uns leider zu schnell.']
		},
		maxPrice: {
			container: 'span[font-family="price"]',
			euroFormat: false
		},
    inStock: [
      {
        container: '#root',
        text: [
          "StyledAvailabilityStatusWrapper"
        ]
      }
    ],
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.saturn.de/de/product/baker-35mm-rechtwinklig-audio-kabel-aux-kabel-p-89478128.html'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3060ti',
			url: 'https://www.saturn.de/de/product/-2701239.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3060ti',
			url: 'https://www.saturn.de/de/product/-2704436.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070',
			url: 'https://www.saturn.de/de/product/-2691244.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.saturn.de/de/product/-2691439.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3070',
			url: 'https://www.saturn.de/de/product/-2695942.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
			url: 'https://www.saturn.de/de/product/-2691365.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2681869.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2681871.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2681859.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2681861.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2683942.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2683937.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2684241.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2684238.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2683227.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2683229.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.saturn.de/de/product/-2683243.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2681863.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2681866.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2681855.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2681857.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2691441.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2691440.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2684235.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.saturn.de/de/product/-2683226.html'
		},
    { // // TEST TEST TEST ps5 bundle overview
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'test:series',
      url: 'https://www.saturn.de/de/category/playstation-2507.html',
      labels: {
        inStock: {
          container: '#root',
          text: [
            'mms-delivery-online-availability_PARTIAL_AVAILABLE',
            'mms-delivery-online-availability_AVAILABLE',
          ]
        },
        outOfStock: {
          container: '#root',
          text: ['Leider haben wir für diese Kategorie keine passenden Produkte gefunden.']
        }
      },
    },

    { // TEST TEST TEST ps5 console old
      brand: 'sony',
      model: 'ps5 console',
      series: 'test:series',
      url: 'https://www.saturn.de/de/product/_fifa-22-sport-playstation-4-2750640.html',
      labels: {
        inStock: {
          container: '#pdp-add-to-cart-button',
          text: ['in den Warenkorb']
        },
        outOfStock: {
          container: '#root',
          text: ["Dieser Artikel ist aktuell nicht verfügbar", "Leider keine Lieferung möglich", "Nicht verfügbar", "Dieser Artikel ist dauerhaft ausverkauft", "Dieser Artikel ist bald wieder für Sie verfügbar"]
        }
      }
    },

		{ // ps5 console old
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b360fc64fce10d7c2d',
      labels: {
        inStock: {
          container: '#pdp-add-to-cart-button',
          text: ['in den Warenkorb']
        },
        outOfStock: {
          container: '#root',
          text: ["Dieser Artikel ist aktuell nicht verfügbar", "Leider keine Lieferung möglich", "Nicht verfügbar", "Dieser Artikel ist dauerhaft ausverkauft", "Dieser Artikel ist bald wieder für Sie verfügbar"]
        }
      }
		},
    { // ps5 console *new revision*
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b3841df084948b6a39',
      labels: {
        inStock: {
          container: '#pdp-add-to-cart-button',
          text: ['in den Warenkorb']
        },
        outOfStock: {
          container: '#root',
          text: ["Dieser Artikel ist aktuell nicht verfügbar", "Leider keine Lieferung möglich", "Nicht verfügbar", "Dieser Artikel ist dauerhaft ausverkauft", "Dieser Artikel ist bald wieder für Sie verfügbar"]
        }
      }
    },
    /*
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b33b82da63f6974f80'
		},
    { // ps5 + rift apart innof
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b321260868445ee01f'
    },*/

    /*
    { // ps5 bundle overview
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b31efeaec36c34698c',
      labels: {
        inStock: {
          container: '#root',
          text: [
            'mms-delivery-online-availability_PARTIAL_AVAILABLE',
            'mms-delivery-online-availability_AVAILABLE',
          ]
        },
        outOfStock: {
          container: '#root',
          text: ['Leider haben wir für diese Kategorie keine passenden Produkte gefunden.']
        }
      },
    },
    /*

    { // ps5 + got
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b3daac5178a6816f1f'
    },


    { // ps5 + mm
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b33d3e25002f8b3407'
    },
    { // ps5 + ds + mm
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b3b406588476dbf3bf'
    },
    { // ps5 + r + mm
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b37c2891223060364b'
    },
    { // ps5 + returnal
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b321260868445ee01f?url=https://www.saturn.de/de/product/_sony-ps5-returnal-2741761.html'
    },
    { // ps5 + rift apart of
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b33f096126e5c3ae0c'
    },
    { // ps5de + psplus90
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b3c37e9bd6ffd1ba7d'
    },
    { // ps5de + ds
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b3c360c62863c0dd60'
    },

     */

		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://pvn.saturn.de/trck/eclick/a542e4a5159a90b30b7d7284317e0c48',
      labels: {
        inStock: {
          container: '#pdp-add-to-cart-button',
          text: ['in den Warenkorb']
        },
        outOfStock: {
          container: '#root',
          text: ["Dieser Artikel ist aktuell nicht verfügbar", "Leider keine Lieferung möglich", "Nicht verfügbar", "Dieser Artikel ist dauerhaft ausverkauft", "Dieser Artikel ist bald wieder für Sie verfügbar"]
        }
      }
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.saturn.de/de/product/-2677359.html'
		}
	],
	name: 'saturn'
};
