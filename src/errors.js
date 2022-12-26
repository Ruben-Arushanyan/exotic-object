
class OperationNotAllowedError extends Error {
  constructor(options) {
    const operation = options?.operation ?? "Operation"
    const message = options?.message ?? `${operation} is Not Allowed`
    super(message)
  }
}

class CallNotAllowedError extends OperationNotAllowedError {
    constructor(options) {
        super({
            message: options?.message,
            operation: "Call",
        });
    }
}

module.exports = {
    IncorrectOperationError,
}