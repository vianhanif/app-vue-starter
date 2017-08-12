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
        text: 'Process',
        value: 'processId',
        align: 'left'
      },
      {
        text: 'Output',
        value: 'outputId',
        align: 'left'
      }
    ],
    items: []
  },
  data: {
    possibleChar: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    input: '',
    loading: false,
    count: 0,
    maxCount: Math.pow(2, (56 / 2)),
    match: '',
    lastResult: '',
    randomData: []
  },
  time: {
    hour: 0,
    minute: 0,
    second: 0
  }
}
