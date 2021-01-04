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

export interface Command {
    commandName: string;
    commandAlias: string[];

    buildResponse(user: number, message: any, args: string[], bot: DiscordBot): Promise<CommandResponse>;
}
