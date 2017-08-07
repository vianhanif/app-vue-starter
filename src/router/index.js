import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Main from 'page/Main'

import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.min.js'

Vue.use(Vuetify)
Vue.use(Router)
Vue.use(VueHead, {
  separator: '-',
  complement: 'Vue App Starter'
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
