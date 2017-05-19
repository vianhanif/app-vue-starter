import * as types from './action-types'

export default {
  [types.GET_TODOS_AS_STRING] (state) {
    return JSON.stringify(state.list)
  }
}
