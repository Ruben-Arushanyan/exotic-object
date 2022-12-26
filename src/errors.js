
class IncorrectOperationError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = {
    IncorrectOperationError,
}