import { Logger } from "./logger"

export class LoggerInfo extends Logger {
    constructor() {
        super()
    }
    /**
     * Override log() method
     */
    log(message) {
        console.log(this.formatMessage(message), this.info)
    }
}