
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

class ToPrimitiveNotAllowedError extends OperationNotAllowedError {
  constructor(options) {
      super({
          message: options?.message,
          operation: "ToPrimitive",
      });
      this.name = "ToPrimitiveNotAllowedError"
  }
}

class GetNotAllowedError extends OperationNotAllowedError {
  constructor(options) {
      super({
          message: options?.message,
          operation: "Get",
      });
      this.name = "GetNotAllowedError"
  }
}

export {
    OperationNotAllowedError,
    CallNotAllowedError,
    ToPrimitiveNotAllowedError,
    GetNotAllowedError,
}