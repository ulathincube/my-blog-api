function errorHandler(error, req, res, next) {
  if (error.message && error.status)
    return res.status(error.status).json({ error: error.message, data: null })
  res.status(500).json({ error: error.message || 'Internal server error' })
}

export default errorHandler
