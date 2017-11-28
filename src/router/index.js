import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import Main from 'page/Main'
import Page1 from 'page/Page1'

Vue.use(Router)
Vue.use(VueMeta)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/page1/:name',
      name: 'Page1-id',
      component: Page1
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    }
  ]
})
