import Vue from 'vue'
import Vuex from 'vuex'
import sha from './sha'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sha
  }
})
