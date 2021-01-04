import { Command, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import config  from "../../config/config.json";

export class Forums implements Command {
    commandName: string = "forums";
    commandAlias: string[] = ["website", "community"];

    buildResponse(user: number, message: any, args: string[], bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `We have community forum where we often post content and have interactions with members of the community, you can check it out at ${config.forumsAddress}.`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
