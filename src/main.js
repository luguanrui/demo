// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入store
import store from './vuex/index'
// 按需加载elementUI
import './assets/elementui'
// 添加全局拦截器
import '@/api/interceptors.js'
// 引入mockjs
require('./mock.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
