import colors from "colors";


export class Logger {

    /**
     * Send a general log message
     *
     * @param {string} message
     * @memberof Logger
     */
    log(message: string) {
        console.log(colors.green("INFO: ") + colors.white(message));
    }

    /**
     * Send a warning message
     *
     * @param {string} message
     * @memberof Logger
     */
    warn(message: string) {
        console.log(colors.yellow("WARN: ") + colors.white(message));
    }
    

    /**
     * Send a debug message
     *
     * @param {string} message
     * @memberof Logger
     */
    err(message: string) {
        console.log(colors.red("ERR: ") + colors.white(message));
    }

    debug(message: string | Object) {
        let toLog = "";
        if (message instanceof Object) {
            toLog = JSON.stringify(message);
        } else {
            toLog = message;
        }
        console.log("DEBUG: ".blue + toLog.white);
        // console.log(color.blue("DEBUG: ") + color.white(toLog));
    }
}
