import {
    CallNotAllowedError,
    ToPrimitiveNotAllowedError,
} from './errors'

const nativeHandlers = {
    call(state, argumentsList, thisArg) {
        throw new CallNotAllowedError()
    },
    toPrimitive(state, hint) {
        throw new ToPrimitiveNotAllowedError()
    },
}

const defaultHandlers = {
    ...nativeHandlers,
}

export {defaultHandlers}

