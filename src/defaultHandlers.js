import {CallNotAllowedError} from './errors'

const nativeHandlers = {
    call(target, argumentsList, thisArg) {
        throw new CallNotAllowedError()
    },
}

const defaultHandlers = {
    ...nativeHandlers,
}

export {defaultHandlers}

