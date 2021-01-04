import { CommandResponse } from "./commands/command";
import { Command } from "./commands/command";
import { commands } from "./commands";

import { DiscordBot } from "../server";

import * as Discord from "discord.js";

interface CommandMap {
    [command: string]: Function;
}

/**
 * Handle command interactions
 *
 * @export
 * @class Command
 */
export class CommandManager {
    private commands: CommandMap = {};

    /**
     * Creates an instance of Command.
     * @param {DiscordBot} bot
     * @memberof Command
     */
    constructor(private bot: DiscordBot) {
        commands.forEach(command => [command.commandName, ...command.commandAlias].forEach(c => this.commands[c] = command.buildResponse));
    }

    /**
     * Run a command by name
     *
     * @param {string} command the command to run 
     * @param {Discord.Message} message send the raw command message
     * @returns {Promise<CommandResponse>} the command's response
     * @memberof Command
     */
    public async runCommand(command: string, message: Discord.Message): Promise<CommandResponse> {
        if (this.commands[command] === undefined) return null;
        const args = message.content.split(" ").splice(1);
        return this.commands[command](message.author.id, message, args, this.bot);
    }
}
