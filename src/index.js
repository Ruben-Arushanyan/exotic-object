const _has = require('lodash/has')
const {
    NOOP,
    IS_EXOTIC,
    isObject,
    isFunction,
    syntaxError,
    isExoticObject,
} = require('./utils')

const exoticObject = (options={}) => {
    const handler = {
        apply(target, thisArg, argumentsList) {
            syntaxError()
        },
        construct(target, argumentsList, newTarget) {
            syntaxError()
        },
        defineProperty(target, property, descriptor) {
            syntaxError()
        },
        deleteProperty(target, property) {
            syntaxError()
        },
        getOwnPropertyDescriptor(target, prop) {
            syntaxError()
        },
        getPrototypeOf(target) {
            syntaxError()
        },
        has(target, prop) {
            syntaxError()
        },
        isExtensible(target) {
            syntaxError()
        },
        ownKeys(target) {
            syntaxError()
        },
        preventExtensions(target) {
            syntaxError()
        },
        get(target, property, receiver) {
            if (property === IS_EXOTIC) {
                return IS_EXOTIC
            }
            if (property === Symbol.toPrimitive) {

            }


            if (isFunction(options.get)) {
                return options.get(target, property, receiver)
            }
            console.log(property)
            syntaxError()
        },
        set(target, property, value, receiver) {
            syntaxError()
        },
        setPrototypeOf(target, prototype) {
            syntaxError()
        },
    }

    return new Proxy(NOOP, handler)
}


const obj = exoticObject()

console.log(obj + '')

module.exports = {
    exoticObject,
}



