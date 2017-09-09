export default {
  app: {
    menus: [
      {
        title: 'Home',
        icon: 'dashboard',
        path: '/'
      },
      {
        title: 'Samples',
        icon: 'dashboard',
        path: 'samples'
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
        text: 'Match',
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
  samples: {
    value: []
  },
  data: {
    matched: false,
    possibleChar: '',
    input: '',
    loading: false,
    count: 0,
    maxCount: 0,
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
