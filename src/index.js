const _has = require('lodash/has')
const {
    NOOP,
    isFunction,
} = require('./utils')

const {
    IS_EXOTIC,
    isExoticObject,
} = require('./isExoticObject')

const exoticObject = (options={}) => {
    const handler = {
        apply(target, thisArg, argumentsList) {
        },
        construct(target, argumentsList, newTarget) {
        },
        defineProperty(target, property, descriptor) {
        },
        deleteProperty(target, property) {
        },
        getOwnPropertyDescriptor(target, prop) {
        },
        getPrototypeOf(target) {
        },
        has(target, prop) {
        },
        isExtensible(target) {
        },
        ownKeys(target) {
        },
        preventExtensions(target) {
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
        },
        set(target, property, value, receiver) {
        },
        setPrototypeOf(target, prototype) {
        },
    }

    return new Proxy(NOOP, handler)
}


const obj = exoticObject()

console.log(obj + '')

module.exports = {
    exoticObject,
}



