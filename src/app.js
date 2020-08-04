const Koa = require('koa')
const helmet = require('koa-helmet')
const app = new Koa()

app.use(helmet())

app.use((ctx) => {
  ctx.body = 'Hey Hey!'
})

app.listen(process.env.SERVER_PORT)
