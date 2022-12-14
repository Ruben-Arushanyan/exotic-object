import { 
    OperationNotAllowedError,
    CallNotAllowedError,
    ToPrimitiveNotAllowedError,
    GetNotAllowedError,
    SetNotAllowedError,
} from '../.packed/errors'

test('OperationNotAllowedError', () => {
    {
        let error = new OperationNotAllowedError()
        expect(error instanceof Error).toBe(true)
        expect(error.name).toBe('OperationNotAllowedError')
        expect(error.message).toBe('Operation is Not Allowed')
    }

    {
        let error = new OperationNotAllowedError({
            message: "This is my custom message",
        })
        expect(error instanceof Error).toBe(true)
        expect(error.name).toBe('OperationNotAllowedError')
        expect(error.message).toBe('This is my custom message')
    }

    {
        let error = new OperationNotAllowedError({
            message: "This is my custom message",
            operation: "Call",
        })
        expect(error instanceof Error).toBe(true)
        expect(error.name).toBe('OperationNotAllowedError')
        expect(error.message).toBe('This is my custom message')
    }

    {
        let error = new OperationNotAllowedError({
            operation: "Call",
        })
        expect(error instanceof Error).toBe(true)
        expect(error.name).toBe('OperationNotAllowedError')
        expect(error.message).toBe('Call is Not Allowed')
    }
})


test('CallNotAllowedError', () => {
    {
        let error = new CallNotAllowedError()
        expect(error instanceof Error).toBe(true)
        expect(error instanceof OperationNotAllowedError).toBe(true)
        expect(error.name).toBe('CallNotAllowedError')
        expect(error.message).toBe('Call is Not Allowed')
    }

    {
        let error = new CallNotAllowedError({
            message: "This is my custom message",
        })
        expect(error.name).toBe('CallNotAllowedError')
        expect(error.message).toBe('This is my custom message')
    }
})


test('ToPrimitiveNotAllowedError', () => {
    {
        let error = new ToPrimitiveNotAllowedError()
        expect(error instanceof Error).toBe(true)
        expect(error instanceof OperationNotAllowedError).toBe(true)
        expect(error.name).toBe('ToPrimitiveNotAllowedError')
        expect(error.message).toBe('ToPrimitive is Not Allowed')
    }

    {
        let error = new ToPrimitiveNotAllowedError({
            message: "This is my custom message",
        })
        expect(error.name).toBe('ToPrimitiveNotAllowedError')
        expect(error.message).toBe('This is my custom message')
    }
})

test('GetNotAllowedError', () => {
    {
        let error = new GetNotAllowedError()
        expect(error instanceof Error).toBe(true)
        expect(error instanceof OperationNotAllowedError).toBe(true)
        expect(error.name).toBe('GetNotAllowedError')
        expect(error.message).toBe('Get is Not Allowed')
    }

    {
        let error = new GetNotAllowedError({
            message: "This is my custom message",
        })
        expect(error.name).toBe('GetNotAllowedError')
        expect(error.message).toBe('This is my custom message')
    }
})

test('SetNotAllowedError', () => {
    {
        let error = new SetNotAllowedError()
        expect(error instanceof Error).toBe(true)
        expect(error instanceof OperationNotAllowedError).toBe(true)
        expect(error.name).toBe('SetNotAllowedError')
        expect(error.message).toBe('Set is Not Allowed')
    }

    {
        let error = new SetNotAllowedError({
            message: "This is my custom message",
        })
        expect(error.name).toBe('SetNotAllowedError')
        expect(error.message).toBe('This is my custom message')
    }
})