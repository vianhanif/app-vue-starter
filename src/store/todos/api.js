// import sha1 from 'sha1'
import axios from 'axios'
require('es6-promise').polyfill()

export default {
  http () {
    return axios.create({
      baseURL: '',
      timeout: 25000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  addTodo (payload, success, error) {
    this.http().post('', payload.todo)
      .then((response) => {
        success(response)
      })
      .catch((response) => {
        error(response)
      })
  }
}
