
import * as types from './action-types'

export default {
  [types.ADD_TODO]({ commit }, payload) {
    commit(types.REQUEST_ADD_TODO)
    setTimeout(() => {
      commit(types.ADD_TODO_SUCCESS, payload)
    }, 700)
  }
}
