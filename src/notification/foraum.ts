import {Link, Store} from "../store/model";
import {config} from '../config';
import {logger, Print} from "../logger";

const axios = require('axios').default;

export async function sendForaumNotification(link: Link, store: Store) {
	logger.info("sending request to foraum.de");

	let storeName = store.name
	let url = link.url
	let series = link.series
	let key = config.notifications.foraum.key
	let console = config.notifications.foraum.console

	axios.post(config.notifications.foraum.url, {
		url,
		storeName,
		key,
		console,
		series,
	})
		.then(function (response: any) {
			logger.info(response);
		})
		.catch(function (error: any) {
			logger.error(error);
		});
}
