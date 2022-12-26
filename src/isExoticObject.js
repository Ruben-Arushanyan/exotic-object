const {isObject} = require('./utils')

const IS_EXOTIC = Symbol()

const isExoticObject = (value) => {
    if (isObject(value)) {
        try {
            return value[IS_EXOTIC] === IS_EXOTIC
        } catch(err) {}
    }
    return false
}

module.exports = {
    isExoticObject,
    IS_EXOTIC,
}