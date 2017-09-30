const key = 3
const offset = 2

// setup arrays as mush as key in one table
const setupTable = (table, key) => {
  for (let i = 0; i < key; i++) {
    table.push([])
  }
}

const assignLetters = (text, table, offset, fixLetter = null) => {
  // set row point to offset as it starting point
  let atRow = offset
  // here a helper to decide when should we increase or decrease row point (atRow)
  let shouldIncreaseOffset = false

  // run algorithm for each letter
  text.split('').forEach((letter, index) => {
    // put each letter into the assigned row point
    table.forEach((array, _index) => {
      table[_index].push(_index === atRow ? (fixLetter !== null ? fixLetter : letter) : '_')
    })

    /*
    * 1. increase row point when row point is 0
    * 2. increase row point when previously increased and the point number is within 1 to table row size
    * 3. other than that, decrease row point
    */
    shouldIncreaseOffset = atRow === 0 || (shouldIncreaseOffset && atRow >= 1 && atRow + 1 < table.length)
    atRow = (shouldIncreaseOffset ? atRow + 1 : atRow - 1)
  })
}

export const encrypt = (text) => {
  let result = ''
  let table = []

  setupTable(table, key)

  assignLetters(text, table, offset)

  // join the resulting rows all togeter into a string
  result = table.join('').replace(/,|_/g, '')
  return result
}

export const decrypt = (text) => {
  let result = ''
  let table = []
  let fixLetter = '*'

  setupTable(table, key)

  assignLetters(text, table, offset, fixLetter)

  let position = 0
  text.split('').forEach((letter) => {
    table.forEach((row, i) => {
      row.forEach((item, j) => {
        if (item === fixLetter) {
          table[i][j] = text.split('')[position]
          position++
        }
      })
    })
  })

  position = 0
  // run algorithm for each letter
  text.split('').forEach((letter, index) => {
    // concat letter at each assigned row point to result
    table.forEach((array, _index) => {
      result += table[_index][position]
    })
    position++
  })

  return result.replace(/,|_/g, '')
}
