const Koa = require('koa')
const Router = require('koa-router')
var cors = require('koa-cors');
const app = new Koa()
const router = new Router()
const homeList = require('./datas/home.json')
const list = require('./datas/list.json')
//首页数据
router.get('/firstpage', function (ctx) {
 const result = ctx.query.req
 console.log(result)
  ctx.body = homeList
})
//分类
router.get('/list', function (ctx) {
  const result = ctx.query.req
  console.log(result)
  ctx.body = list
})
app.use(cors()).use(router.routes()).use(router.allowedMethods())
app.listen(5000, () => {
  console.error(`服务器启动成功：localhost:${5000}`)
})
