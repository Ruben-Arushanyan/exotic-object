import {isObject} from './utils'

const IS_EXOTIC = Symbol()

const isExoticObject = (value) => {
    if (isObject(value)) {
        try {
            return value[IS_EXOTIC] === IS_EXOTIC
        } catch(err) {}
    }
    return false
}

export {
    isExoticObject,
    IS_EXOTIC,
}