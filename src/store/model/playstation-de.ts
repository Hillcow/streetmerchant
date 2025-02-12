import {Store} from './store';
import fetch from 'node-fetch';

export const PlayStationDe: Store = {
	currency: '$',
	labels: {
		inStock: [
			{
				container: '.productHero-info .add-to-cart:not(.hide)',
				text: ['In den Einkaufswagen']
			},
			{
				container: '.bulleted-info.queue',
				text: ['Warteschlange']
			},
      {
        container: 'body',
        text: ['Warteschlange']
      },
      {
        container: 'body',
        text: ['"stock":{"stockLevelStatus":"inStock"}']
      },
		],
		outOfStock: [
      {
        container: '.MainPart_pMessageOnQueueTicket',
        text: ['Nicht lieferbar']
		  },
      {
        container: '.MainPart_pMessageOnQueueTicket',
        text: ['heute ausverkauft.']
		  },
    ],
    maxPrice: {
      container: "body",
      regex: /"value":([0-9.]+)/i,
      euroFormat: true
    },
	},
	links: [
    /*
		{
			brand: 'test:brand',
			itemNumber: '9399506-DE',
			model: 'test:model',
			series: 'test:series',
			url: 'https://direct.playstation.com/de-de/buy-accessories/dualsense-wireless-controller'
		},
     */

    {
      brand: 'sony',
      model: 'psportal',
      series: 'psportal',
      url: 'https://direct.playstation.com/de-de/buy-accessories/playstation-portal-remote-player',
      scrapeUrl: 'https://api.direct.playstation.com/commercewebservices/ps-direct-de/users/anonymous/products/productList?fields=BASIC&lang=de_DE&productCodes=1000041537-DE',
    },

    {
      brand: 'sony',
      model: 'ps5 console slim',
      series: 'sonyps5cslim',
      url: 'https://direct.playstation.com/de-de/search?q=PlayStation+5+Konsole+Modellgruppe+-+Slim',
      scrapeUrl: 'https://api.direct.playstation.com/commercewebservices/ps-direct-de/users/anonymous/products/productList?fields=BASIC&lang=de_DE&productCodes=1000040586-DE,1000040657-DE',
    },

    /**
     * PS5 Disc: 9423898-DE
     * PS5 Digital: 9424994-DE
     */
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://direct.playstation.com/de-de/hardware/ps5',
      scrapeUrl: 'https://api.direct.playstation.com/commercewebservices/ps-direct-de/users/anonymous/products/productList?fields=BASIC&lang=de_DE&productCodes=9423898-DE,9424994-DE',
    },
    /*
		{
			brand: 'sony',
			itemNumber: '9709091-DE',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://direct.playstation.com/de-de/buy-consoles/playstation5-console'
		},
    {
			brand: 'sony',
			itemNumber: '9709091-DE',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://direct.playstation.com/de-de/buy-consoles/playstation5-console-god-of-war-ragnarok-bundle'
		},
    {
			brand: 'sony',
			itemNumber: '9709091-DE',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://direct.playstation.com/de-de/buy-consoles/playstation5-console-ea-sports-fifa-23-bundle'
		},
    /*
		{
			brand: 'sony',
			itemNumber: '9710196-DE',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://direct.playstation.com/de-de/buy-consoles/playstation5-digital-edition-console'
		}*/
	],
	name: 'playstation-de',

  /*
	realTimeInventoryLookup: async (itemNumber: string) => {
    const request_url = 'https://api.direct.playstation.com/commercewebservices/ps-direct-de/products/productList?fields=BASIC&productCodes=' +
			itemNumber;
		const response = await fetch(request_url);
		const response_json = await response.json();
		if (
			response_json.products[0].stock.stockLevelStatus !== 'outOfStock' &&
			response_json.products[0].maxOrderQuantity >= 0
		) {
			return true;
		}

		return false;
	}

   */
};
