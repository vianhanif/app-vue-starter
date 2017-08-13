export default {
  app: {
    menus: [
      {
        title: 'Home',
        icon: 'dashboard'
      }
    ],
    container: {
      drawer: false,
      mini: false,
      right: null
    },
    test: {
      btn: 'Run'
    }
  },
  table: {
    search: '',
    pagination: {
      sortBy: 'count',
      rowPerPage: 5,
      descending: true
    },
    headers: [
      {
        text: 'Count',
        align: 'left',
        sortable: true,
        value: 'count'
      },
      {
        text: 'Time',
        value: 'time',
        align: 'left'
      },
      {
        text: 'Input',
        value: 'input',
        align: 'left'
      },
      {
        text: 'Output',
        value: 'output',
        align: 'left'
      }
    ],
    items: []
  },
  data: {
    possibleChar: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_+-=[]{}|;\'\\:",./<>?',
    input: '',
    loading: false,
    count: 0,
    maxCount: Math.pow(2, (56 / 2)),
    match: '',
    lastResult: {
      time: '00:00:00',
      input: '',
      value: ''
    },
    randomData: []
  },
  time: {
    hour: 0,
    minute: 0,
    second: 0
  }
}
