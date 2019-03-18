import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/applications/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
    {
      path: '/home',
      component: Home
    },
  ]
})
