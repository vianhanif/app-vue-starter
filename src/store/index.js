import Vue from 'vue'
import Vuex from 'vuex'
import collision from './collision'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collision
  }
})
