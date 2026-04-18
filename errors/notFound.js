import CustomError from './CustomError.js'

function notFound(req, res, next) {
  throw new CustomError(404, 'Error: Unable to find this resource')
}

export default notFound
