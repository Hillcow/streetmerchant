import {Store} from './store';

export const Cyberport: Store = {
	currency: '€',
	labels: {
		inStock: [
		  {
        container: 'div.addToCart > button',
        text: ['In den Warenkorb']
		  },
      {
        container: '.tooltipAvailabilityParent',
        text: ['sofort verfügbar']
		  },
      {
        container: '.tooltipParent',
        text: ['sofort verfügbar']
      },
      {
        container: '.searchResults .productTitleName',
        text: ['Sony PlayStation 5']
      }
		],
		maxPrice: {
			container: 'span.productOmnibox-price__price--store',
			euroFormat: false
		},
		outOfStock: {
			container: '.tooltipAvailabilityParent',
			text: ['noch nicht verfügbar']
		},
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.cyberport.de?DEEP=2E12-3KL'
		},
		{
			brand: 'sony',
			model: 'psportal',
			series: 'psportal',
			url: 'https://www.cyberport.de/gaming/playstation/sony/pdp/7b14-02p/sony-playstation-portal-remote-player-weiss.html'
		},
    {
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E07-51S'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E07-51T'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E07-51L'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E07-51N'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E21-537'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E21-52Y'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.cyberport.de?DEEP=2e21-532'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E21-52Z'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E12-3L6'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E12-3L7c'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E13-1H4'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url: 'https://www.cyberport.de?DEEP=2E13-1H7'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.cyberport.de?DEEP=2001-71p'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.cyberport.de/?DEEP=2001-71n'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.cyberport.de?DEEP=2001-71m'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.cyberport.de?DEEP=2001-71l'
		},
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
			url: 'https://partner.cyberport.de/trck/eclick/5abbb2ba72408e5b97f396993289618a1f1982f94b0cdec5'
		},
    /*
    { // Microsoft Xbox Series X 1TB + Xbox Wireless Controller Pulse Red für 555€
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://tidd.ly/3mkk7e2'
    },
    { // Microsoft Xbox Series X 1TB + Xbox Wireless Controller Daystrike Camo für 555€
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://tidd.ly/37X3PQ8'
    },*/
    { // Microsoft Xbox Series X 1TB + GamePass Ultimate 2 Jahre
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://tidd.ly/3mZGwxq'
    },
    /*
    { // übersicht
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5c',
      url: 'https://partner.cyberport.de/trck/eclick/5abbb2ba72408e5bdf31e5cd1a81e021e75379665510ea38'
    },
    */
    { // ps5de + mf
      brand: 'sony',
      model: 'ps5 console bundle',
      series: 'sonyps5de',
      url: 'https://partner.cyberport.de/trck/eclick/5abbb2ba72408e5bdf31e5cd1a81e0216638ae818432fd56'
    },
	],
	name: 'cyberport'
};
