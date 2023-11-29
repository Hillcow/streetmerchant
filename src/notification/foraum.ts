import {Link, Store} from "../store/model";
import {config} from '../config';
import {logger, Print} from "../logger";

const axios = require('axios').default;

export function sendForaumNotification(link: Link, store: Store, base64image?: String) {
	logger.info("sending request to foraum.de");

	let storeName = store.name
	let url = link.url
	let cartUrl = link.cartUrl
	let model = link.model
	let series = link.series
	let key = config.notifications.foraum.key
	let console = config.notifications.foraum.console
  let screenshot = null
  let title = null
  let price = link.price ?? null
  if (link.screenshot && base64image) {
    logger.info("Screenshot available");
    //screenshot = base64image
  }

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

	axios.post(config.notifications.foraum.url, {
		url,
    cartUrl,
		storeName,
		key,
		console,
		model,
		series,
    screenshot,
    title,
    price
	})
		.then(function (response: any) {
			logger.info("Successfully notified Foraum.");
		})
		.catch(function (error: any) {
			//logger.error(error);
      /*
      if (error && store.name.includes("amazon") && !store.name.includes("warehouse")) {
        sendTweet(link, store);
      }*/
		});
}
