const router = require('koa-router')()

const users = require('../data/user')
const routers = require('../data/router')

// 注意这里面 最好使用 loginCheck 中间件 拦截 防止直接暴露
// router.post('/user_router_auth', loginCheck ,async (ctx, next) => {
router.post('/user_router_auth',async (ctx, next) => {
  const {uid} = ctx.request.body 
  // 在路由里面来筛选 uid 把uid对应的那一个user那一项拿出来
  if(uid){
    let authRouterInfo = [];
    const userInfo = users.filter(user => user.id == uid)[0]
    // 这里是为了把里面auth和router中一一对应的取出来
    userInfo.auth.map(rid => {
      routers.map(router => {
        if(router.id == rid){
          authRouterInfo.push(router)
        }
      })
    })
    ctx.body = authRouterInfo;
  }else{
    next()
  }
})

module.exports = router
