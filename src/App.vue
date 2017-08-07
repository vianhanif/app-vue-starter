<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {

    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/base";
</style>
