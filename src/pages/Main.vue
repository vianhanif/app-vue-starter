<template lang="html">
  <Hello/>
</template>

<script>
import Hello from 'components/Hello/app'

export default {
  name: 'Main',
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
