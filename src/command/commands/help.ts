import { DiscordBot } from "../../server";
import { CommandResponse, Command } from "./command";

export class Help implements Command {
    commandName: string = "help";
    commandAlias: string[] = [""];

    buildResponse(user: number, message: any, args: string[], bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            throw new Error("Method not implemented.");
        });
    }

}
