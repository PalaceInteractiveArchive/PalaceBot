import { Logger } from "./logger";
import { DiscordBot } from "./server";

import cmdLingArgs from 'command-line-args';
import config  from "./config/config.json"

const options = [
    { name: "swears", alias: "s", type: String}
];

const args = cmdLingArgs(options);

const logger: Logger = new Logger();
const discord: DiscordBot = new DiscordBot(config, args.swears);

console.log("Attempting to establish Discord connection...");

discord.connect();
