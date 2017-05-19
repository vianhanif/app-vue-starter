import * as types from './action-types'

export default {
  [types.REQUEST_ADD_TODO] (state) {
    state.status = types.STATUS_LOADING
  },
  [types.ADD_TODO_SUCCESS] (state, {payload, response}) {
    let { todo, success } = payload
    todo.id = state.list.length + 1
    state.list.push(todo)
    state.status = types.STATUS_FINISH
    success(response)
  },
  [types.ADD_TODO_FAILURE] (state, {payload, response}) {
    let { error } = payload
    state.status = types.STATUS_FINISH
    error(response)
  },
  [types.MUTATE_ADD_TODO] (state, todo) {
    todo.id = state.list.length + 1
    state.list.push(todo)
  }
}
