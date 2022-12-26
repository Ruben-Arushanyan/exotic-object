const _has = require('lodash/has')
const {
    NOOP,
    isFunction,
} = require('./utils')
const {
    OperationNotAllowedError,
} = require('./errors')
const {
    defaultHandlers,
} = require('./defaultHandlers')

const {
    IS_EXOTIC,
    isExoticObject,
} = require('./isExoticObject')

const exoticObject = (options={}) => {
    const handlers = {
        apply(_, thisArg, argumentsList) {
        },
        construct(_, argumentsList, newTarget) {
            throw new OperationNotAllowedError()
        },
        defineProperty(_, property, descriptor) {
            throw new OperationNotAllowedError()
        },
        deleteProperty(_, property) {
            throw new OperationNotAllowedError()
        },
        getOwnPropertyDescriptor(_, prop) {
            throw new OperationNotAllowedError()
        },
        getPrototypeOf(_) {
            throw new OperationNotAllowedError()
        },
        has(_, prop) {
            throw new OperationNotAllowedError()
        },
        isExtensible(_) {
            throw new OperationNotAllowedError()
        },
        ownKeys(_) {
            throw new OperationNotAllowedError()
        },
        preventExtensions(_) {
            throw new OperationNotAllowedError()
        },
        get(_, property, receiver) {
            if (property === IS_EXOTIC) {
                return IS_EXOTIC
            }
            throw new OperationNotAllowedError()
        },
        set(_, property, value, receiver) {
            throw new OperationNotAllowedError()
        },
        setPrototypeOf(_, prototype) {
            throw new OperationNotAllowedError()
        },
    }

    return new Proxy(NOOP, handlers)
}

module.exports = {
    exoticObject,
    isExoticObject,
}



