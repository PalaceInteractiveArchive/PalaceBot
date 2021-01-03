import "reflect-metadata";

import * as discord from "discord.js";
// import fs from "fs-extra";

import { Command } from "./command/command";
import { CommandResponse } from "./command/commands/command";
import { IConfig } from "./defs";
import { Logger } from "./logger";



/**
 * Controlls all the main actions within the bot
 *
 * @export
 * @class DiscordBot
 */
export class DiscordBot {
    public client: discord.Client;
    private command: Command;

    // TODO: Add a swear filter to the bot
    // private swears: string[] = [];

    constructor(private config: IConfig, public logger: Logger) {
        this.client = new discord.Client();
        this.command = new Command(this);
    }

    connect() {
        this.client.once("ready", () => {
            this.getPalaceGuild();
            this.client.user.setActivity('Palace Network', {type: 'WATCHING'});
            // const botCH = this.client.channels.cache.get("777224676803346472") as discord.TextChannel;
            // botCH.send("Have no fear! The Palace Bot is here! 😎");
            console.log("Succesfully connected to Discord.");
        });

        this.client.on("message", (message: discord.Message) => {
            console.log(message.content)
            if (message.content[0] === "!" && message.content[1] !== " ") {
                let regex: RegExp = /!(\D+)/;
                try {
                    let commandName: string = regex.exec(message.content)[1];
                    if (commandName === (null || undefined)) return;

                    this.command.runCommand(commandName, message).then((response: CommandResponse) => {
                        if (response !== null) {
                            if (response.mention) {
                                message.reply(response.response);
                                message.delete();
                            } else {
                                message.channel.send(response.response);
                            }
                        }
                    });
                } catch (e) {
                    return;
                }
            }

            if (message.mentions.has(this.client.user) && !message.mentions.everyone) {
                message.react('👋🏻');
                message.reply(`Hello! I am the Palace Discord Bot! I can only really respond to commands. Please use **!help** for a list of commands!`);
            }
            
            if (message.content === "I love you Palace Bot!") {
                const attachment = new discord.MessageAttachment('https://media.giphy.com/media/XftasWlvGSB7tL2d3l/giphy.gif');
                message.react('❤️');
                message.reply(attachment);
            }
        });
        this.client.login(this.config.token);
    }

    getPalaceGuild(): discord.Guild {
        let palaceId = "516147385110495232";
        let returnedGuild: discord.Guild = null;
        
        return returnedGuild = this.client.guilds.resolve(palaceId);
    }

}
