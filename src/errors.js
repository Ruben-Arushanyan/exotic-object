
class OperationNotAllowedError extends Error {
  constructor(options) {
    const operation = options?.operation ?? "Operation"
    const message = options?.message ?? `${operation} is Not Allowed`
    super(message)
    this.name = "OperationNotAllowedError"
  }
}

class CallNotAllowedError extends OperationNotAllowedError {
    constructor(options) {
        super({
            message: options?.message,
            operation: "Call",
        });
        this.name = "CallNotAllowedError"
    }
}

export {
    OperationNotAllowedError,
}