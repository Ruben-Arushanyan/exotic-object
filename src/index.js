const _has = require('lodash/has')
const {
    isObject,
    isFunction,
} = require('./utils')

const syntaxError = () => {
    throw Error('SyntaxError: invalid syntax')
}
const NOOP = function() {}

const isExoticObjectSymbol = Symbol()

const isExoticObject = (value) => {
    if (isObject(value)) {
        try {
            return value[isExoticObjectSymbol] === isExoticObjectSymbol
        } catch(err) {}
    }
    return false
}

setDefault

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
            if (property === isExoticObjectSymbol) {
                return isExoticObjectSymbol
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
    isExoticObject,
}



