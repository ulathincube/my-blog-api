import express from 'express'
import notFound from './errors/notFound.js'
import errorHandler from './errors/errorHandler.js'
import blogRouter from './routes/blog.js'
import authRouter from './routes/auth.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)
app.use('/api/blog', blogRouter)

app.use('/*splat', notFound)
app.use(errorHandler)

export default app
