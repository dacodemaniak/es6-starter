import * as moment from 'moment'

const INFO = 'color: blue; font-style: normal;'
const WARN = 'color: orange; font-style: normal;'
const ERROR = 'color: red; font-style: normal;'

export class Logger {
    constructor() {
        this.logDate = moment()
    }

    formatMessage(message) {
        return '[' + this.logDate.format('HH:mm:ss') + ']\t%c' + message
    }

    log(){}

    get info() {
        return INFO
    }

    get warn() {
        return WARN
    }

    get error() {
        return ERROR
    }
}