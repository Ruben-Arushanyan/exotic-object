import has from 'lodash.has'
import {defaultHandlers} from './defaultHandlers'

const resolveOperationHandler = (options, handlerName) => {
    if (has(options, ['operation', handlerName])) {
        return options.operation[handlerName]
    }
    return defaultHandlers[handlerName]
}

const resolvePropertyOperationHandler = (options, handlerName, property) => {
    if (has(options, ['propertyOperation', property, handlerName])) {
        return options.propertyOperation[property][handlerName]
    }
    if (has(options, ['propertyOperation', '*', handlerName])) {
        return options.propertyOperation['*'][handlerName]
    }
    return defaultHandlers[handlerName]
}

export {
    resolveOperationHandler,
    resolvePropertyOperationHandler,
}