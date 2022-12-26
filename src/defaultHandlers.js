import {CallNotAllowedError} from './errors'

const nativeHandlers = {
    call(target, thisArg, argumentsList) {
        throw new CallNotAllowedError()
    },
}
const defaultHandlers = {
    ...nativeHandlers,
}

