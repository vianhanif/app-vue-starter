import * as mutation from './type/mutations'

export default {
  [mutation.REQUEST_ADD_TODO] (state) {
    state.status = 'Loading'
  },
  [mutation.ADD_TODO_SUCCESS] (state, {payload, response}) {
    console.log(payload)
    let { todo, success } = payload
    todo.id = state.list.length + 1
    state.list.push(todo)
    state.status = 'Finish'
    success(response)
  },
  [mutation.ADD_TODO_FAILURE] (state, {payload, response}) {
    let { error } = payload
    state.status = 'Finish'
    error(response)
  },
  [mutation.MUTATE_ADD_TODO] (state, todo) {
    todo.id = state.list.length + 1
    state.list.push(todo)
  }
}
