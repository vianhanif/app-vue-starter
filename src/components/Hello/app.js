const app = {
  name: 'Hello',
  methods:{
    reverseText: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  },
  data(){
    return{
        name: '',
        msg: 'Welcome to Your Vue.js App',
        time_message: new Date(),
        seen: true,
        links: {
          essential:[
            { href: '#', text: 'Core Docs' },
            { href: 'https://forum.vuejs.org', text: 'Forom' },
            { href: 'https://gitter.im/vuejs/vue', text: 'Gitter Chat' },
            { href: 'https://twitter.com/vuejs', text: 'Twitter' },
            { href: 'http://vuejs-templates.github.io/webpack/', text: 'Docs for This Template' }
          ],
          ecosystem: [
            { href: 'http://router.vuejs.org/', text: 'vue-router' },
            { href: 'http://vuex.vuejs.org/', text: 'vuex' },
            { href: 'http://vue-loader.vuejs.org/', text: 'vue-loader' },
            { href: 'https://github.com/vuejs/awesome-vue', text: 'awesome-vue' }
          ]
        }
    }
  }
}

export default app;
