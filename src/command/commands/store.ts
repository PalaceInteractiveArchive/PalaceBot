import { Command, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import config  from "../../config/config.json";

export class Store implements Command {
    commandName: string = "store";
    commandAlias: string[] = [""];

    buildResponse(user: number, message: any, args: string[], bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `the Palace Network online store offers several cosmetic and rank upgrades. If you'd like to support us, visit ${config.storeAddress}.`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
