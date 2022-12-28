import {
    CallNotAllowedError,
    ToPrimitiveNotAllowedError,
} from './errors'

const nativeHandlers = {
    call(target, argumentsList, thisArg) {
        throw new CallNotAllowedError()
    },
    toPrimitive(hint) {
        throw new ToPrimitiveNotAllowedError()
    },
}

const defaultHandlers = {
    ...nativeHandlers,
}

export {defaultHandlers}

