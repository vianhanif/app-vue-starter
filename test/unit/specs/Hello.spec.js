import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/app'

describe('Hello/app.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor({
      router: new Router({}),
    }).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App ')
  })
})
