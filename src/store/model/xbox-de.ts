import {Store} from './store';

export const XboxDe: Store = {
	currency: '€',
	labels: {
    inStock: {
      container: '#PageContent button',
      text: ['>Auschecken<']
    },
		outOfStock: {
			container:
				'#PageContent button',
			text: ['nicht vorrätig']
		},
	},
	links: [
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://click.linksynergy.com/deeplink?id=FjEGXM4d1NY&mid=46131&murl=https%3A%2F%2Fwww.xbox.com%2Fde-de%2Fconfigure%2F8WJ714N3RBTL',
      labels: {
        inStock: {
          container: 'h1',
          text: ['xbox series x']
        }
      },
    },
    { // halo limited edition
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://click.linksynergy.com/deeplink?id=FjEGXM4d1NY&mid=46131&murl=https%3A%2F%2Fwww.xbox.com%2Fde-de%2Fconfigure%2F8RPM8T9CK0P6',
      labels: {
        inStock: {
          container: 'h1',
          text: ['xbox series x']
        }
      },
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'test:series',
      url: 'https://click.linksynergy.com/deeplink?id=FjEGXM4d1NY&mid=46131&murl=https://www.xbox.com/de-de/configure/942J774TP9JN',
      labels: {
        inStock: {
          container: 'h1',
          text: ['xbox series s']
        }
      },
    }
],
	name: 'xbox-de'
};
