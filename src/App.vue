<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  metaInfo () {
    return {
      title: this.$route.name
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/base";
</style>
