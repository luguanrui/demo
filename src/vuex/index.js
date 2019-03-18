import Vue from 'vue'
import Vuex from 'vuex'
import { dialog } from './dialog/index'

Vue.use(Vuex)

const stores = {
  modules: {
    dialog
  }
}

const store = new Vuex.Store(stores)

export default store
