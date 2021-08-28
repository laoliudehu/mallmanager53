import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      nmae: 'login',
      path: '/login',
      component: Login
    },
    {
      nmae: 'home',
      path: '/',
      component: Home
    }
  ]
})
