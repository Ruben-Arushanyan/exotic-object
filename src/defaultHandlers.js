import {
    CallNotAllowedError,
    ToPrimitiveNotAllowedError,
    GetNotAllowedError,
    SetNotAllowedError,
} from './errors'

const nativeHandlers = {
    call(state, argumentsList, thisArg) {
        throw new CallNotAllowedError()
    },
    toPrimitive(state, hint) {
        throw new ToPrimitiveNotAllowedError()
    },
    get(state, property) {
        throw new GetNotAllowedError()
    },
    set(state, value, property) {
        throw new SetNotAllowedError()
    },
}

const defaultHandlers = {
    ...nativeHandlers,
}

export {defaultHandlers}

