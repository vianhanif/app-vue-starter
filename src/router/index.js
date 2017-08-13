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
      redirect: '/sha-app'
    },
    {
      path: '/sha-app',
      redirect: '/sha-app/home'
    },
    {
      path: '/sha-app',
      name: 'SHA_APP',
      component: require('page/sha/app'),
      children: [
        {
          path: 'home',
          component: require('page/sha/pages/home/app')
        }
      ]
    }
  ]
})
