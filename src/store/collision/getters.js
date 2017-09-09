import * as action from 'store/collision/action-types'

export default {
  [action.SHA_APP] ({app}) {
    return app
  },
  [action.SHA_APP_MENUS] ({app}) {
    return app.menus
  },
  [action.SHA_APP_CONTAINER] ({app}) {
    return app.container
  },
  [action.SHA_TABLE] ({table}) {
    return table
  },
  [action.SHA_DATA] ({data}) {
    return data
  },
  [action.SHA_TIME_ELAPSED] ({time}) {
    return time
  }
}
