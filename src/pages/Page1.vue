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
  mounted () {
    // const todo = {
    //   title: 'Todo 3',
    //   description: 'descrition'
    // }
    // this.$store.commit(action.MUTATE_ADD_TODO, todo)
  },
  methods: {
    addNewTodo () {
      const todo = {
        title: 'Todo',
        description: 'descrition'
      }
      this.$store.dispatch(action.ADD_TODO,
        { todo,
          success (response) {
            console.log(response)
          },
          error (response) {
            console.log(response)
          }
        }
      )
    }
  },
  data () {
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
