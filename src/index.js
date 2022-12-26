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
        apply(target, thisArg, argumentsList) {
        },
        construct(target, argumentsList, newTarget) {
            throw new OperationNotAllowedError()
        },
        defineProperty(target, property, descriptor) {
            throw new OperationNotAllowedError()
        },
        deleteProperty(target, property) {
            throw new OperationNotAllowedError()
        },
        getOwnPropertyDescriptor(target, prop) {
            throw new OperationNotAllowedError()
        },
        getPrototypeOf(target) {
            throw new OperationNotAllowedError()
        },
        has(target, prop) {
            throw new OperationNotAllowedError()
        },
        isExtensible(target) {
            throw new OperationNotAllowedError()
        },
        ownKeys(target) {
            throw new OperationNotAllowedError()
        },
        preventExtensions(target) {
            throw new OperationNotAllowedError()
        },
        get(target, property, receiver) {
            if (property === IS_EXOTIC) {
                return IS_EXOTIC
            }
            throw new OperationNotAllowedError()
        },
        set(target, property, value, receiver) {
            throw new OperationNotAllowedError()
        },
        setPrototypeOf(target, prototype) {
            throw new OperationNotAllowedError()
        },
    }

    return new Proxy(NOOP, handlers)
}

module.exports = {
    exoticObject,
    isExoticObject,
}



