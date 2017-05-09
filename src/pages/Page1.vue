<template lang="html">
  <div class="">
    <ul>
      <li>Page 1, name : <b>{{$route.params.name || ''}}</b></li>
      <li><router-link to="/">Go to Main Page</router-link></li>
      <li><button type="button" @click="addNewTodo">add</button></li>
      <li>{{$store.state.todos.status}}</li>
      <li>{{ allTodos }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as action from 'store/todos/action-types'

export default {
  name: 'Page1',
  head: {
    title: {
      inner: 'Page 1'
    }
  },
  computed: {
    ...mapGetters({
        allTodos: action.GET_TODOS_AS_STRING
    })
  },
  mounted(){
    const todo = {
      id: 3,
      title: 'Todo 3',
      description: 'descrition'
    }
    this.$store.commit(action.MUTATE_ADD_TODO, todo)
  },
  methods: {
    addNewTodo(){
      const todo = {
        id: 3,
        title: 'Todo 3',
        description: 'descrition'
      }
      this.$store.dispatch(action.ADD_TODO,
        { todo,
          success(){
            console.log('add todo success')
          },
          error(){
            console.log('add todo failed')
          }
        }
      )
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
