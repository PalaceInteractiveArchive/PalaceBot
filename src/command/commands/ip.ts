import { ICommand, CommandResponse } from "./command";
import { DiscordBot } from "../../server";
import { config } from "../../config/production";

export class IP implements ICommand {
    commandName: string = "ip";

    buildResponse(user: number, message: any, bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            const reponse: CommandResponse = {
                response: `You can join using Minecraft: Java Edition ${config.minecraftVersion} using the IP \`${config.minecraftIP}\`!`,
                channelId: message.channel,
                mention: true
            }
            resolve(reponse);
        });
    }
}
