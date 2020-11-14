import { ICommand, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import { config } from "../../config/production";

export class Forums implements ICommand {
    commandName: string = "forums";

    buildResponse(user: number, message: any, bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `You want to join our Community Forums? Head over to ${config.forumsAddress}!`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
