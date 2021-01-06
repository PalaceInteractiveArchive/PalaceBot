import { Command, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import config  from "../../config/config.json";

export class Appeal implements Command {
    commandName: string = "appeal";
    commandAlias: string[] = [];

    buildResponse(user: number, message: any, args: string[], bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `You can submit a ban appeal on our community forums ${config.appealAddress}.`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
