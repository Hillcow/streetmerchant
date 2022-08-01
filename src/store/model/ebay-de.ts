import {Store} from './store';

export const EbayDe: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: [
        'geben sie die unten angezeigten zeichen ein',
        'geben sie die zeichen unten ein'
      ]
    },
    outOfStock: [
      {
        container: '#MessageContainer',
        text: [
          '0 Ergebnisse in Kategorie',
          '0 Ergebnisse',
          'Ergebnisse in Kategorie',
          'auf alle Kategorien erweitert'
        ]
      },
    ]
  },
  links: [
    { // ps5 disc
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.ebay.de/sch/Konsolen/139971/i.html?toolid=10001&mkcid=1&_from=R40&_fosrp=1&campid=5338839853&siteid=77&mkrid=707-53477-19255-0&_nkw=playstation+5&_in_kw=1&_ex_kw=&_sacat=1249&_mPrRngCbx=1&_udlo=350&_udhi=900&LH_BIN=1&LH_ItemCondition=3&_ftrt=901&_ftrv=1&_sabdlo=&_sabdhi=&_samilow=&_samihi=&_sadis=15&_stpos=85570&_sargn=-1%26saslc%3D1&_salic=77&_fss=1&_fsradio=%26LH_SpecificSeller%3D1&_saslop=1&_sasl=saturn%2Cmediamarkt&_sop=10&_dmd=1&_ipg=60&customid=&mkevt=1',
      labels: {
        maxPrice: {
          container: 'ul#ListViewInner > li:first-of-type li.lvprice span',
          euroFormat: true
        },
        inStock: [
          {
            container: 'ul#ListViewInner > li:first-of-type',
            text: ['Sofort-Kaufen', 'Click & Collect']
          }
        ],
      }
    },
  ],
  name: 'ebay-de'
};
