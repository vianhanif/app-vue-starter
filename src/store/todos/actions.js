
import * as types from './action-types'
import api from './api'

export default {
  [types.ADD_TODO]({ commit }, payload) {
    commit(types.REQUEST_ADD_TODO)
    // example using API method
    // api.addTodo(payload,
    //   (response) => {
    //     commit(types.ADD_TODO_SUCCESS, { payload, response })
    //   },
    //   (response) => {
    //     commit(types.ADD_TODO_FAILURE, { payload, response })
    //   }
    // )
    setTimeout(() => {
      let response = "api response"
      commit(types.ADD_TODO_SUCCESS, { payload, response })
    }, 700)
  }
}
