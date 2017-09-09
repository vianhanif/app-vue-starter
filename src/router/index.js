import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import VueHead from 'vue-head'

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
      redirect: '/app'
    },
    {
      path: '/app',
      redirect: '/app/home'
    },
    {
      path: '/app',
      name: 'COLlISION_APP',
      component: require('page/collision/app'),
      children: [
        {
          path: 'home',
          component: require('page/collision/pages/home/app')
        },
        {
          path: 'samples',
          component: require('page/collision/pages/samples/app')
        }
      ]
    }
  ]
})
