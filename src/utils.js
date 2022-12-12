const isObject = (x) => {
    const type = typeof x
    return x !== null && (type === 'object' || type === 'function')
}

const isFunction = (x) => {
    const type = typeof x
    return type === 'function'
}

module.exports = {
    isObject,
    isFunction,
}