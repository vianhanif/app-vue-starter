import * as types from './action-types'

export default {
  [types.REQUEST_ADD_TODO](state){
    state.status = types.STATUS_LOADING
  },
  [types.ADD_TODO_SUCCESS](state, payload){
    state.list.push(payload.todo)
    state.status = types.STATUS_FINISH
    payload.success()
  },
  [types.MUTATE_ADD_TODO](state, todo){
    state.list.push(todo)
  }
}
