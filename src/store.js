import Vue from 'vue'
import Vuex from 'vuex'

import Login from './store/login';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: Login,
  }
})
