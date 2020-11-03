import { DiscordBot } from "../../server";

/**
 * Custom command response
 *
 * @export
 * @interface CommandResponse
 */
export interface CommandResponse {
    response: any;
    channelId: number;
    mention: boolean;
}

export interface ICommand {
    commandName: string;
    buildResponse(user: number, message: any, bot: DiscordBot): Promise<CommandResponse>;
}
