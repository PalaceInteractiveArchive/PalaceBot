import { DiscordBot } from "../../server";
import { CommandResponse, ICommand } from "./command";

export class Link implements ICommand {
    commandName: string = "link";
    buildResponse(user: number, message: any, bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            console.log(message.content[7]);
            if (message.content.length <= 5) {
                const response: CommandResponse = {
                    response: 'I see that you need help with linking your discord account! You need to provide a valid code. If you need help, please refer to this link <shortlink thing here>',
                    channelId: message.channel,
                    mention: true
                }
                resolve(response);
            } else if (message.content.length >= 5) {
                const discordCode = message.content.slice(8);
                const response: CommandResponse = {
                    response: `***THIS IS FOR TESTING PURPOSES*** your discord linking code is: ${discordCode}`,
                    channelId: message.channel,
                    mention: true
                }
                resolve(response);
            }
        });
    }

}
