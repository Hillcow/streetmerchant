import {Link, Store} from '../store/model';
import Discord from 'discord.js';
import {config} from '../config';
import {logger} from '../logger';

const discord = config.notifications.discord;
const {notifyGroup, webhooks, notifyGroupSeries} = discord;

function getIdAndToken(webhook: string) {
	const match = /.*\/webhooks\/(\d+)\/(.+)/.exec(webhook);

	if (!match) {
		throw new Error('could not get discord webhook');
	}

	return {
		id: match[1],
		token: match[2]
	};
}

export function sendDiscordMessage(link: Link, store: Store) {
	if (webhooks.length > 0) {
		logger.debug('↗ sending discord message');

		(async () => {
			try {

				let notifyText: string[] = [];

				if (notifyGroup) {
					notifyText = notifyText.concat(notifyGroup);
				}

				if (Object.keys(notifyGroupSeries).indexOf(link.series) !== 0) {
					notifyText = ["🚨 Jetzt bestellen*: " + link.url]
				}

				const promises = [];
				for (const webhook of webhooks) {
					const {id, token} = getIdAndToken(webhook);
					const client = new Discord.WebhookClient(id, token);

					promises.push({
						client,
						message: client.send(notifyText.join(' '))
					});
				}

				(await Promise.all(promises)).forEach(({client}) =>
					client.destroy()
				);

				logger.info('✔ discord message sent');
			} catch (error: unknown) {
				logger.error("✖ couldn't send discord message", error);
			}
		})();
	}
}
