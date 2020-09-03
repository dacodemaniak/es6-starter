import { Logger } from "./logger";

export class LoggerWarn extends Logger {
    constructor() {
        super()
    }
    /**
     * Override log() method
     */
    log(message) {
        console.log(this.formatMessage(message), this.warn)
    }
}