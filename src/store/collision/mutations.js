import * as action from 'store/collision/action-types'
import config from '@/config'

export default {
  [action.ADD_SAMPLE] ({samples}, value) {
    samples.value.push(value)
  },
  [action.RUN_PROCESS] ({data, app}) {
    data.loading = true
    app.test.btn = 'Stop'
  },
  [action.STOP_PROCESS] ({data, table, app}) {
    data.loading = false
    app.test.btn = 'Continue'
  },
  [action.ADD_TEST_RESULT] ({table}, data) {
    table.items.push(data)
  },
  [action.CLEAR_TEST_DATA] ({table, app}) {
    table.items = []
    app.test.btn = 'Run'
  },
  [action.SET_TEST_INPUT] ({data}, value) {
    data.input = value
  },
  [action.ADD_TEST_COUNT] ({data}) {
    data.count += 1
  },
  [action.RESET_TEST_COUNT] ({data}) {
    data.count = 0
  },
  [action.SET_TABLE_SEARCH] ({table}, value) {
    table.search = value
  },
  [action.ADD_RANDOM_DATA] ({data}, value) {
    data.randomData.push(value)
  },
  [action.RESET_RANDOM_DATA] ({data}) {
    data.randomData = []
    data.lastResult = {
      time: '00:00:00',
      input: '',
      value: ''
    }
  },
  [action.SET_LAST_RESULT] ({data}, value) {
    data.lastResult = value
  },
  [action.SET_MATCH] ({data}, value) {
    if (value !== null && value !== '') {
      let sha = config.app.SHA
      data.match = sha(value)
    } else {
      data.match = ''
    }
  },
  [action.RESET_TICK_TIME] ({time}) {
    time.second = 0
    time.minute = 0
    time.hour = 0
  },
  [action.TICK_TIME] ({time}) {
    if (time.minute === 59 && time.second === 59) {
      time.hour += 1
      time.minute = 0
      time.second = 0
    } else if (time.second === 59) {
      time.minute += 1
      time.second = 0
    } else {
      time.second += 1
    }
  },
  [action.SET_MATHCED] ({data}, value) {
    data.matched = value
  }
}
