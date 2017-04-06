<template lang="html">
  <Hello/>
</template>

<script>
import Hello from '@@/Hello/app'

export default {
  name: 'Page1',
  head: {
    title: {
      inner: 'Home'
    }
  },
  data(){
    return {

    }
  },
  components: {
    Hello
  }
}
</script>
