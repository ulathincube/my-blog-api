import express from 'express'
import notFound from './errors/notFound.js'
import errorHandler from './errors/errorHandler.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/*splat', notFound)
app.use(errorHandler)

export default app
