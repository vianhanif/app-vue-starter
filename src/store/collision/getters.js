import * as action from 'store/collision/action-types'

export default {
  [action.APP] ({app}) {
    return app
  },
  [action.APP_MENUS] ({app}) {
    return app.menus
  },
  [action.APP_CONTAINER] ({app}) {
    return app.container
  },
  [action.TABLE] ({table}) {
    return table
  },
  [action.DATA] ({data}) {
    return data
  },
  [action.TIME_ELAPSED] ({time}) {
    return time
  },
  [action.SAMPLES] ({samples}) {
    return samples.value
  }
}
