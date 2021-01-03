import { DiscordBot } from "../../server";
import { Command } from "../command";
import { CommandResponse, ICommand } from "./command";

export class Help implements ICommand {
    commandName: string = "help";
    buildResponse(user: number, message: any, bot: DiscordBot): Promise<CommandResponse> {
        return new Promise<CommandResponse>((resolve, reject) => {
            throw new Error("Method not implemented.");
        });
    }

}
