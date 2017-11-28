<template lang="html">
  <div class="">
    <ul>
      <li>Page 1, name : <b>{{$route.params.name || ''}}</b></li>
      <li><router-link to="/">Go to Main Page</router-link></li>
      <li>
        <button type="button" @click="ADD_TODO({ todo, addTodoSuccess, addTodoFailure })">
          add
        </button>
      </li>
      <li>{{$store.state.todos.status}}</li>
      <li>{{ GET_TODOS_AS_STRING }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as getters from 'store/todos/type/getters'
import * as actions from 'store/todos/type/actions'

export default {
  name: 'Page1',
  computed: {
    ...mapGetters({ ...getters })
  },
  methods: {
    ...mapActions({ ...actions }),
    addTodoSuccess (response) {
      console.log(response)
    },
    addTodoFailure (response) {
      console.log(response)
    }
  },
  data () {
    return {
      todo: {
        title: 'Todo',
        description: 'description'
      }
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
