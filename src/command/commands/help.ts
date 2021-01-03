import { MessageEmbed } from "discord.js";
import { DiscordBot } from "../../server";
import { Command } from "../command";
import { CommandResponse, ICommand } from "./command";

export class Help implements ICommand {
    commandName: string = "help";
    buildResponse(user: number, message: any, bot: DiscordBot): Promise<CommandResponse> {
        const embed = new MessageEmbed()
            .setTitle('Palace Bot Help Commands')
            .setColor('#5b0bbe')
            .setDescription('These are the commands I currently support')
            .addFields([{name: 'Apply', value: '```!apply```', inline: true}, {name: 'Appeal', value: '```!appeal```', inline: true}, {name: 'Forums', value: '```!forums```', inline: true}, {name: 'Help', value: '```!help```', inline: true}, {name: 'IP', value: '```!ip```', inline: true}, {name: 'Rules', value: '```!rules```', inline: true}, {name: 'Store', value: '```!store```', inline: true}])

        return new Promise<CommandResponse>((resolve, reject) => {
            const response: CommandResponse = {
                response: embed,
                channelId: message.channel,
                mention: true
            }
            resolve(response);
        });
    }

}
