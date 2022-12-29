import {
    CallNotAllowedError,
    ToPrimitiveNotAllowedError,
    GetNotAllowedError,
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
    }
}

const defaultHandlers = {
    ...nativeHandlers,
}

export {defaultHandlers}

