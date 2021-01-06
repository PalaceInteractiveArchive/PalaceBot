import { Command, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import config  from "../../config/config.json";

export class Rules implements Command {
    commandName: string = "rules";
    commandAlias: string[] = [""];

    buildResponse(user: number, message: any, args: string[], bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `Our community guidlines and polices are available for review at ${config.rulesAddress}.`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
