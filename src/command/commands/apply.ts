import { ICommand, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import { config } from "../../config/production";

export class Apply implements ICommand {
    commandName: string = "apply";

    buildResponse(user: number, message: any, bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `We are always offering new oppourtunites to join our team, see what positions are available at ${config.applyAddress}.`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
