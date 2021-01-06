import { Logger } from "./logger";
import { DiscordBot } from "./server";

import config  from "./config/config.json"

const logger: Logger = new Logger();
const discord: DiscordBot = new DiscordBot(config, logger);

logger.log("Attempting to establish Discord connection...");

try {
    discord.connect();
} catch (error) {
    logger.err(error);
}
