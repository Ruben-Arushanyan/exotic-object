const NOOP = function() {}
const IS_EXOTIC = Symbol()
const DEFAULT_HANDLERS = {
    
}


const isObject = (x) => {
    const type = typeof x
    return x !== null && (type === 'object' || type === 'function')
}

const isFunction = (x) => {
    const type = typeof x
    return type === 'function'
}

const syntaxError = () => {
    throw Error('SyntaxError: invalid syntax')
}

const isExoticObject = (value) => {
    if (isObject(value)) {
        try {
            return value[IS_EXOTIC] === IS_EXOTIC
        } catch(err) {}
    }
    return false
}

module.exports = {
    NOOP,
    IS_EXOTIC,

    isObject,
    isFunction,
    syntaxError,
    isExoticObject,
}