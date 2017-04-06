<template lang="html">
  <div class="">
    <ul>
      <li>Page 1, name : <b>{{$route.params.name}}</b></li>
      <li><router-link to="/">Go to Main Page</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Page1',
  head: {
    title: {
      inner: 'Page 1'
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">
  ul{
    list-style-type: none;
    li{
      display: block;
    }
  }
</style>
