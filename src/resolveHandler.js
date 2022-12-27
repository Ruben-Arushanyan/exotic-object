import has from 'lodash.has'
import {defaultHandlers} from './defaultHandlers'

const resolveOperationHandler = (target, handlerName) => {
    if (has(target, ['operation', handlerName])) {
        return target.operation[handlerName]
    }
    return defaultHandlers[handlerName]
}

const resolvePropertyOperationHandler = (target, handlerName, property) => {
    if (has(target, ['propertyOperation', property, handlerName])) {
        return target.propertyOperation[property][handlerName]
    }
    if (has(target, ['propertyOperation', '*', handlerName])) {
        return target.propertyOperation['*'][handlerName]
    }
    return defaultHandlers[handlerName]
}

export {
    resolveOperationHandler,
    resolvePropertyOperationHandler,
}