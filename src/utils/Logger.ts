import * as winston from 'winston';

const Logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'log'}),
    ],
    format: winston.format.combine(
        winston.format.colorize({all: true}),
        winston.format.simple(),
        winston.format.printf((log => `[${log.level.toUpperCase()}] - ${log.message}`),
        )
    )
})

export default Logger;
