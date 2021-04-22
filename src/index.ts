import 'dotenv/config';
import { Logger } from "./logger";
import { DiscordBot } from "./server";

import config  from "./config/config.json"
import MessageQueue from './mq';

const logger: Logger = new Logger();
const discord: DiscordBot = new DiscordBot(config, logger);
const messageQueue: MessageQueue = new MessageQueue(discord);

logger.log("Attempting to establish Discord connection...");

try {
    discord.connect();
    messageQueue.initQueue();
} catch (error) {
    logger.err(error);
}
