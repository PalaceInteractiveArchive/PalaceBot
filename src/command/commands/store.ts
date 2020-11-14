import { ICommand, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import { config } from "../../config/production";

export class Store implements ICommand {
    commandName: string = "store";

    buildResponse(user: number, message: any, bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `If you fancy a rank upgrade head over to ${config.storeAddress}!`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
