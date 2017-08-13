import * as action from 'store/sha/action-types'

export default {
  [action.RUN_TEST] ({commit}, {data, time}) {
    let {input, count, maxCount, match, lastResult, randomData, possibleChar} = data
    let sha224 = require('js-sha256').sha224
    if (input !== null && input !== '') {
      if (count === 0) {
        commit(action.ADD_RANDOM_DATA, input)
      }
      if (count < maxCount && match !== lastResult.value && input !== lastResult.input) {
        let randomText = () => {
          let text = ''
          for (let i = 0; i < Math.floor((Math.random() * possibleChar.length) + 1); i++) {
            text += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length))
          }
          return text
        }
        let textIsRepeated = (text) => {
          let repeated = false
          randomData.forEach((item, index) => {
            if (item === text) {
              repeated = true
            }
          })
          return repeated
        }
        let _input = randomText()
        let {second, minute, hour} = time
        let _second = String(second).length < 2 ? ('0' + second) : second
        let _minute = String(minute).length < 2 ? ('0' + minute) : minute
        let _hour = String(hour).length < 2 ? ('0' + hour) : hour
        let _time = `${_hour}:${_minute}:${_second}`
        if (!textIsRepeated(_input)) {
          commit(action.ADD_RANDOM_DATA, _input)
          let result = sha224(_input)
          commit(action.ADD_TEST_RESULT, {
            count: (count + 1),
            time: _time,
            processId: _input,
            outputId: result
          })
          if (match !== lastResult.value) {
            commit(action.SET_LAST_RESULT, {
              time: _time,
              input: _input,
              value: result
            })
          } else {
            commit(action.STOP_PROCESS)
          }
          commit(action.ADD_TEST_COUNT)
        }
      } else {
        commit(action.STOP_PROCESS)
      }
    }
  },
  [action.STOP_TEST] ({commit}) {
    commit(action.STOP_PROCESS)
  }
}
