require('dotenv').config()
import Logger from "./utils/Logger";
import { DiscordBot } from "./server";

import MessageQueue from './mq';

const discord: DiscordBot = new DiscordBot();
const messageQueue: MessageQueue = new MessageQueue(discord);

Logger.log('info', 'Attempting to connect to discord...');

try {
    discord.connect();
    messageQueue.initQueue();
} catch (error) {
    Logger.log('error', error);
}
