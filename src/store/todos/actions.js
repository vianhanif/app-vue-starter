
import * as action from './type/actions'
import * as mutation from './type/mutations'
// import api from './api'

export default {
  [action.ADD_TODO] ({ commit }, payload) {
    commit(mutation.REQUEST_ADD_TODO)
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
      let response = 'api response'
      commit(mutation.ADD_TODO_SUCCESS, { payload, response })
    }, 700)
  }
}
