import {Link, Store} from "../store/model";
import {config} from '../config';
import {logger, Print} from "../logger";
import {sendTweet} from "./twitter";
import fetch from "node-fetch";

const axios = require('axios').default;

export async function sendForaumNotification(link: Link, store: Store, base64image?: String) {
	logger.info("sending request to foraum.de");

	let storeName = store.name
	let url = link.url
	let series = link.series
	let key = config.notifications.foraum.key
	let console = config.notifications.foraum.console
  let screenshot = null
  if (link.screenshot && base64image) {
    logger.info("Screenshot available: " + link.screenshot);
    screenshot = base64image
  }

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

	axios.post(config.notifications.foraum.url, {
		url,
		storeName,
		key,
		console,
		series,
    screenshot
	})
		.then(function (response: any) {
			logger.info(response);
		})
		.catch(function (error: any) {
			logger.error(error);
      sendTweet(link, store);
		});
}
