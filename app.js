const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
/*const bodyparser =require('koa-bodyparser')*/
const logger = require('koa-logger')
const mongoose = require('mongoose')
const koaBody = require('koa-body')
const index = require('./routes/index')
const users = require('./routes/users')
const route = require('./routes/routers')

// error handler
onerror(app)

// middlewares
/*app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))*/
app.use(json())
app.use(logger())
app.use(koaBody());
app.use(require('koa-static')(__dirname + '/public'))

mongoose.Promise = global.Promise;

app.use(views(__dirname + '/public/html', {
    map:{html:'ejs'}
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(route.routes(), route.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
