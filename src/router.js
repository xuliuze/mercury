import Vue from 'vue'
import Router from 'vue-router'
import record from './views/record'
import brgade from './views/brgade'
import firetruck from './views/fireTruck'
import msgManager from './views/msgManager'
import notice from './views/notice'
import role from './views/role'
import users from './views/users'
import home from './views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      name:'index',
      path:'/',
      component:home
    },
    {
      name:'record',
      path:'/record',
      component:record
    },
    {
      name:'brgade',
      path:'/brgade',
      component:brgade
    },
    {
      name:'firetruck',
      path:'/firetruck',
      component:firetruck
    },
    {
      name:'msgManager',
      path:'/msgManager',
      component:msgManager
    },
    {
      name:'notice',
      path:'/notice',
      component:notice
    },
    {
      name:'role',
      path:'/role',
      component:role
    },
    {
      name:'users',
      path:'/users',
      component:users
    }
  ]
})
