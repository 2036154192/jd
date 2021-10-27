import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import guard from './guard'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    beforeEnter:(to,from,next)=>{
      guard.isLogin(to,from,next)
    },
    component:() => import('../views/Login.vue')
  },
  {
    path:'/shopping',
    name:'Shopping',
    beforeEnter:(to,from,next)=>{
      guard.goLogin(to,from,next)
    },
    component:() => import('../views/GWC.vue')
  },
  {
    path:'/register',
    name:'Register',
    beforeEnter:(to,from,next)=>{
      guard.isLogin(to,from,next)
    },
    component:() => import('../views/Register.vue')
  },{
    path:'/order',
    name:'Order',
    beforeEnter:(to,from,next)=>{
      guard.goLogin(to,from,next)
    },
    component:() => import('../views/Order.vue')
  },{
    path:'/my',
    name:'My',
    beforeEnter:(to,from,next)=>{
      guard.goLogin(to,from,next)
    },
    component:() => import('../views/My.vue'),
  },{
    path:'/more',
    name:'More',
    component:() => import('../views/More.vue')
  },{
    path:'/product/:id',
    name:"Product",
    props:true,
    beforeEnter:(to,from,next)=>{
      guard.goLogin(to,from,next)
    },
    component:() => import('../views/Product.vue')
  },{
    path:'/search',
    name:'Search',
    component:() => import('../views/Search.vue')
  },{
    path:'/deal',
    name:'Deal',
    beforeEnter:(to,from,next)=>{
      guard.goLogin(to,from,next)
    },
    component:() => import('../views/Deal.vue')
  },{
    path:'/set',
    name:'Set',
    beforeEnter:(to,from,next)=>{
      guard.goLogin(to,from,next)
    },
    component:() => import('../views/Set.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
