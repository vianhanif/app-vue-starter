<template lang="html">
  <div class="">
    <ul>
      <li>Page 1, name : <b>{{$route.params.name || ''}}</b></li>
      <li><router-link to="/">Go to Main Page</router-link></li>
      <li><button type="button" @click="addNewTodo">add</button></li>
      <li>{{ allTodos }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Page1',
  head: {
    title: {
      inner: 'Page 1'
    }
  },
  computed: {
    ...mapGetters({
        allTodos: 'allTodos'
    })
  },
  methods: {
    addNewTodo(){
      const payload = {
        todo: {
          id: 3,
          title: 'Todo 3',
          description: 'descrition'
        }
      }
      this.$store.dispatch('aSyncAddTodo', payload)
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
