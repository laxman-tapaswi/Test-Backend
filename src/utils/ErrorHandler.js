class ErrorHandler extends Error {
  constructor(
    statusCode,
    message = "Something Wrong",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    (this.data = null), (this.success = false), (this.errors = errors);

    if (statck) {
      this.stack = this.stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ErrorHandler;
