import Vue from 'vue'
import Vuex from 'vuex'
import collision from './collision'

require('es6-promise').polyfill()

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collision
  }
})
