import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'Todo 1',
        description: 'descrition'
      },
      {
        id: 2,
        title: 'Todo 2',
        description: 'descrition'
      }
    ]
  },
  getters: {
    allTodos(state){
      return JSON.stringify(state.todos)
    }
  },
  mutations: {
    addTodo(state, payload){
      state.todos.push(payload.todo)
    }
  },
  actions: {
    aSyncAddTodo({ commit }, payload){
      setTimeout(() => {
        commit('addTodo', payload)
      }, 500)
    }
  }
})
