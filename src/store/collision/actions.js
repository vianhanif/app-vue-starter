import * as action from 'store/collision/action-types'
import config from '@/config'

export default {
  [action.RUN_TEST] ({commit}, {data, samples, time}) {
    let {input, count, maxCount, match, lastResult, randomData} = data
    let sha = config.app.SHA
    if (input !== null && input !== '' && samples.length > 0) {
      if (count <= samples.length) {
        if (count === 0) {
          commit(action.ADD_RANDOM_DATA, input)
        }
        if (count < maxCount && match !== lastResult.value && input !== lastResult.input) {
          let randomText = () => {
            return samples[count]
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
          console.log(_input)
          let {second, minute, hour} = time
          let _second = String(second).length < 2 ? ('0' + second) : second
          let _minute = String(minute).length < 2 ? ('0' + minute) : minute
          let _hour = String(hour).length < 2 ? ('0' + hour) : hour
          let _time = `${_hour}:${_minute}:${_second}`
          if (!textIsRepeated(_input)) {
            commit(action.ADD_RANDOM_DATA, _input)
            let result = sha(_input)
            commit(action.ADD_TEST_RESULT, {
              count: (count + 1),
              time: _time,
              input: match === lastResult.value,
              output: result
            })
            commit(action.SET_LAST_RESULT, {
              time: _time,
              input: _input,
              value: result
            })
            if (match === lastResult.value) {
              commit(action.STOP_PROCESS)
            }
            commit(action.ADD_TEST_COUNT)
          }
        } else {
          commit(action.STOP_PROCESS)
        }
      }
    }
  },
  [action.STOP_TEST] ({commit}) {
    commit(action.STOP_PROCESS)
  }
}
