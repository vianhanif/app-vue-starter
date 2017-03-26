import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/app'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
