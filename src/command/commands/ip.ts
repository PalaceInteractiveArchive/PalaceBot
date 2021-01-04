import { Command, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import config  from "../../config/config.json";

export class IP implements Command {
    commandName: string = "ip";
    commandAlias: string[] = [''];

    buildResponse(user: number, message: any, args: string[], bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `You can join using Minecraft: Java Edition ${config.minecraftVersion} using the IP ${config.minecraftIP}.`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
