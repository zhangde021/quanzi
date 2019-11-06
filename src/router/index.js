import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: ()=>import("../views/Home.vue"),
    childer:[
      {//我的
        path:"/my",
        name:"my",
        component:()=>import("../views/home/My.vue")
      }, {//圈子
        path: "/crcle",
        name: "crcle",
        component: () => import("../views/home/Crcle.vue")
      },
    ]
  },
  {//详情
    path: '/detail',
    name: 'detail',
    component: ()=>import("../views/Detail.vue")
  },
  {//登录
    path: '/loing',
    name: 'loing',
    component: () => import("../views/Loing.vue")
  }, {//注册
    path: '/registered',
    name: 'registered',
    component: () => import("../views/Registered.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
