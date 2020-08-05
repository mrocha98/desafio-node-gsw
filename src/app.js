const Koa = require('koa')
const bodyParser = require('koa-body')
const helmet = require('koa-helmet')
const cors = require('@koa/cors')
const logger = require('koa-logger')

const router = require('./routes')

const { NODE_ENV, SERVER_PORT } = process.env

const app = new Koa()

app.use(bodyParser())
app.use(helmet())
app.use(cors())

if (NODE_ENV === 'development') app.use(logger())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(SERVER_PORT, () => console.log(`🚀 Server listening on ${SERVER_PORT}`))
