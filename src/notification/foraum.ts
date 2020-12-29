import {Link, Store} from "../store/model";
import {config} from '../config';
import {logger, Print} from "../logger";

const axios = require('axios').default;

export async function sendForaumNotification(link: Link, store: Store) {
	logger.info("sending request to foraum.de");

	let storeName = store.name
	let url = link.url
	let key = config.notifications.foraum.key

	axios.post(config.notifications.foraum.url, {
		url,
		storeName,
		key
	})
		.then(function (response: any) {
			logger.info(response);
		})
		.catch(function (error: any) {
			logger.error(error);
		});
}
