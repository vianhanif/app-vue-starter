import * as getter from './type/getters'

export default {
  [getter.GET_TODOS_AS_STRING] (state) {
    return JSON.stringify(state.list)
  }
}
