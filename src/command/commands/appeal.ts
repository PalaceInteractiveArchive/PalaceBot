import { ICommand, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import { config } from "../../config/production";

export class Appeal implements ICommand {
    commandName: string = "appeal";

    buildResponse(user: number, message: any, bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `If you have been banned off our server you can submit an appeal on our forums ${config.appealAddress}!`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
