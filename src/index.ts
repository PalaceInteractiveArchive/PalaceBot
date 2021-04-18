import { DiscordBot } from "./server";

import config  from "./config/config.json"
import Logger from "./utils/Logger";

const discord: DiscordBot = new DiscordBot(config);

Logger.log('info', 'Attempting to connect to discord...');

try {
    discord.connect();
} catch (error) {
    logger.err(error);
}
