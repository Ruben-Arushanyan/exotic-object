import {
    NOOP,
} from './utils'
import {
    OperationNotAllowedError,
} from './errors'
import {
    IS_EXOTIC,
} from './isExoticObject'
import {
    resolveOperationHandler,
    resolvePropertyOperationHandler,
} from './resolveHandler'

const exoticObject = (options={}) => {
    const handlers = {
        apply(_, thisArg, argumentsList) {
            const handler = resolveOperationHandler(options, 'call')
            return handler(options?.state, argumentsList, thisArg)
        },
        get(_, property) {
            if (property === IS_EXOTIC) {
                return IS_EXOTIC
            }
            if (property === Symbol.toPrimitive) {
                const handler = resolveOperationHandler(options, 'toPrimitive')
                return (hint) => handler(options?.state, hint)
            }
            const handler = resolvePropertyOperationHandler(options, 'get', property)
            return handler(options?.state, property)
        },
        set(_, property, value) {
            const handler = resolvePropertyOperationHandler(options, 'set', property)
            handler(options?.state, value, property)
            return true
        },
        deleteProperty(_, property) {
            throw new OperationNotAllowedError()
        },
        has(_, prop) {
            throw new OperationNotAllowedError()
        },





        construct(_, argumentsList, newTarget) {
            throw new OperationNotAllowedError()
        },
        defineProperty(_, property, descriptor) {
            throw new OperationNotAllowedError()
        },
        getOwnPropertyDescriptor(_, prop) {
            throw new OperationNotAllowedError()
        },
        getPrototypeOf(_) {
            throw new OperationNotAllowedError()
        },
        isExtensible(_) {
            throw new OperationNotAllowedError()
        },
        ownKeys(_) {
            throw new OperationNotAllowedError()
        },
        preventExtensions(_) {
            throw new OperationNotAllowedError()
        },
        setPrototypeOf(_, prototype) {
            throw new OperationNotAllowedError()
        },
    }

    return new Proxy(NOOP, handlers)
}

export {exoticObject}
