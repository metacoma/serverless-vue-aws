import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import User from '@/components/User'
import VmBoot from '@/components/VmBoot'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    /*
    {
      path: '/vmboot',
      name: 'User',
      component: VmBoot
    },
    {
      path: '/admin',
      name: 'User',
      component: Admin
    }
    */
  ]
})
