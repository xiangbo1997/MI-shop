let Koa = require('koa')
let KoaRouter = require('koa-router')
let home = require('./datas/home.json')
let list = require('./datas/list.json')

let koa = new Koa()
let koaRouter = new KoaRouter()
//接口样例
koaRouter.get('/', (ctx, next) => {
    let req = ctx.query.req
    console.log(req)
    ctx.body = {
        code: 1,
        content: "登陆成功"
    }
})
//登陆接口
koaRouter.get('/login', (ctx, next) => {
    let username = ctx.query.username
    let password = ctx.query.password
    ctx.body = {
        code: 1,
        content: "登陆成功",
        username,
    }
})

//注册接口
koaRouter.get('/registory', (ctx, next) => {
    let username = ctx.query.username

    ctx.body = {
        code: 1,
        content: "注册并登陆成功",
        username
    }
})
koaRouter.get('/home', (ctx, next) => {
    let req = ctx.query.req
    console.log(req)
    ctx.body = {
        code: 1,
        content: home
    }
})
koaRouter.get('/list', (ctx, next) => {
    let req = ctx.query.req
    console.log(req)
    ctx.body = {
        code: 1,
        content: list
    }
})

koa.use(koaRouter.routes())
    .use(koaRouter.allowedMethods())
koa.listen('5000', () => {
    console.log('服务器启动成功')
    console.log('服务器地址为 http://localhost:5000')
})