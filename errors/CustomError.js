class CustomError extends Error {
  constructor(statusCode, errorMessage) {
    this.status = statusCode
    super(errorMessage)
  }
}

export default CustomError
