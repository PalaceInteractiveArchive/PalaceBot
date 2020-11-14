import { ICommand, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import { config } from "../../config/production";

export class Rules implements ICommand {
    commandName: string = "rules";

    buildResponse(user: number, message: any, bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `You can remind yourself of our Community Rules over at ${config.rulesAddress}!`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
