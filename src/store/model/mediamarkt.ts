import {Store} from './store';

export const Mediamarkt: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '€',
	labels: {
		captcha: {
			container: 'p',
			text: ['Das ging uns leider zu schnell.']
		},
		maxPrice: {
			container: 'span[data-test="branded-price-whole-value"]',
			euroFormat: true
		},
    inStock: [
      {
        container: 'button#pdp-add-to-cart-button',
        text: [
          "In den Warenkorb"
        ]
      }
    ],
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.mediamarkt.de/de/product/_hama-0-9-m-2030950.html'
		},
    {
      brand: 'sony',
      model: 'psportal',
      series: 'psportal',
      url: 'https://www.mediamarkt.de/de/product/_sony-playstation-portaltm-remote-player-2899832.html'
    },
		{
			brand: 'asus',
			model: 'dual',
			series: '3060ti',
			url: 'https://www.mediamarkt.de/de/product/-2701239.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3060ti',
			url: 'https://www.mediamarkt.de/de/product/-2704436.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2691243.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2691244.html'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2691245.html'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2691246.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2691247.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2691439.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2691444.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2696163.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2696164.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2694894.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2694896.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2694898.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2695942.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2695941.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2691365.html'
		},
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070',
			url: 'https://www.mediamarkt.de/de/product/-2695671.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2681869.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2681871.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2681859.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2681861.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2683942.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2683937.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2684241.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2684238.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2683227.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2683229.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.mediamarkt.de/de/product/-2683243.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3090',
			url: 'https://www.mediamarkt.de/de/product/-2681863.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url: 'https://www.mediamarkt.de/de/product/-2681866.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.mediamarkt.de/de/product/-2681855.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.mediamarkt.de/de/product/-2681857.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.mediamarkt.de/de/product/-2691441.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090',
			url: 'https://www.mediamarkt.de/de/product/-2691440.html'
		},
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3090',
			url: 'https://www.mediamarkt.de/de/product/-2684235.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.mediamarkt.de/de/product/-2683226.html'
		},

    { // // TEST TEST TEST ps5 bundle overview
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'test:series',
      url: 'https://www.mediamarkt.de/de/category/playstation-635.html',
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
      url: 'https://www.mediamarkt.de/de/product/_fifa-22-sport-playstation-4-2750640.html',
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
			url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f3325a6beb3ebda5194',
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
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f337ca5c715da38efa5',
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
			url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f33747a62a3f43c7f70'
		},
    { // ps5 + got
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f33dd5ad028c4d02f09'
    },

     */
    /*
    { // ps5 bundle overview
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f332c1e11c292e23e15',
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

     */
    /*
    { // ps5 + rift apart innof
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f333fe7c4d5495c44d7'
    },

    { // ps5 + mm
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f3306be4e9f1a947191'
    },

    { // ps5 + ds + mm
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f33341b2d4d6d150642'
    },
    { // ps5 + r + mm
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f33dc329716e630ac4e'
    },
    { // ps5 + rift apart innof
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f333fe7c4d5495c44d7'
    },
    { // ps5 + returnal
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f33aed895d79d9fd985'
    },
    { // ps5 + rift apart of
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f33960b389fbd40faed'
    },
    { // ps5de + psplus90
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f3371a229799655f59e'
    },
    { // ps5de + ds
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f33ef880922ab532ea5'
    },

     */

		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://pvn.mediamarkt.de/trck/eclick/57fce76616197f33022d3d793dfba07c',
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
			url: 'https://www.mediamarkt.de/de/product/-2677359.html?tag=1'
		},
	],
	name: 'mediamarkt'
};
