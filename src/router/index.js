import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Hello from '@/components/Hello/app.vue'

Vue.use(Router)
Vue.use(VueHead, {
  separator: '-',
  complement: 'Vue App Starter'
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
