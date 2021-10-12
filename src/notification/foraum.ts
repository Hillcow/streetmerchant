import {Link, Store} from "../store/model";
import {config} from '../config';
import {logger, Print} from "../logger";
import {sendTweet} from "./twitter";
import fetch from "node-fetch";

const axios = require('axios').default;

export async function sendForaumNotification(link: Link, store: Store, base64image?: String) {
	logger.info("sending request to foraum.de");

	switch (store.name) {
    case "baur":
      store.name = "Baur"
      break
    case "amazon-de":
      store.name = "AmazonDE"
      break
    case "mediamarkt":
      store.name = "MediaMarkt"
      break
    case "otto":
      store.name = "Otto"
      break
    case "euronics-de":
      store.name = "Euronics"
      break
    case "gamestop-de":
      store.name = "GameStop"
      break
    case "medimax":
      store.name = "Medimax"
      break
    case "saturn":
      store.name = "Saturn"
      break
    case "expert":
      store.name = "Expert"
      break
    case "computeruniverse":
      store.name = "Computeruniverse"
      break
    case "spielegrotte":
      store.name = "Spielegrotte"
      break
    case "muller":
      store.name = "Müller"
      break
  }

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
