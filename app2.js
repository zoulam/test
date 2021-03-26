const koa = require('koa')

let app = new koa()
koa.listen('3000', () => {
    console.log('http://localhost:3000')
})