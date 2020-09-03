import { LoggerInfo } from "./logger-info";
import { LoggerError } from "./logger-error";
import { LoggerWarn } from "./logger-warn";

export class LoggerFactory {
    static getLogger(loggerType) {
        switch (loggerType.toString().toLowerCase()) {
            case 'info':
                return new LoggerInfo()
            break;

            case 'error':
                return new LoggerError()
            break;

            case 'warning':
                return new LoggerWarn()
            break;
        }
    }
}