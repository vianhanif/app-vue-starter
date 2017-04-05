<template>
  <div class="hello">
    <h1 v-on:click="reverseText" v-bind:title="time_message">{{ msg }} {{ name }}</h1>
    <input v-model="name"/>
    <h2>Essential Links</h2>
    <ul v-if="seen">
      <li v-for="link in links.essential">
        <a v-bind:href="link.href" target="_blank">{{link.text}} <slot></slot>    </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li v-for="link in links.ecosystem">
        <a v-bind:href="link.href" target="_blank">{{link.text}}<slot></slot></a>
      </li>
    </ul>
  </div>
</template>

<script>
import './style.scss'

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
</script>
