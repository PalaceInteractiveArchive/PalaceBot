import * as color from "colors/safe";


export class Logger {

    /**
     * Send a general log message
     *
     * @param {string} message
     * @memberof Logger
     */
    log(message: string) {
        console.log(color.green("INFO: ") + color.white(message));
    }

    /**
     * Send a warning message
     *
     * @param {string} message
     * @memberof Logger
     */
    // warn(message: string) {
    //     console.log(color.yellow("WARN: ") + color.white(message));
    // }
    

    /**
     * Send a debug message
     *
     * @param {string} message
     * @memberof Logger
     */
    err(message: string) {
        console.log(color.red("ERR: ") + color.white(message));
    }

    debug(message: string | Object) {
        let toLog = "";
        if (message instanceof Object) {
            toLog = JSON.stringify(message);
        } else {
            toLog = message;
        }
        console.log(color.blue("DEBUG: ") + color.white(toLog));
    }
}
