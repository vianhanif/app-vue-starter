export default (text) => {
  let result = ''
  let key = 3
  let offset = 2
  let table = []

  // setup arrays as mush as key in one table
  for (let i = 0; i < key; i++) {
    table.push([])
  }

  // set row point to offset as it starting point
  let atRow = offset
  // here a helper to decide when should we increase or decrease row point (atRow)
  let shouldIncreaseOffset = false

  // run algorithm for each letter
  text.split('').forEach((letter, index) => {
    // put each letter into the assigned row point
    table.forEach((array, _index) => {
      table[_index].push(_index === atRow ? letter : '_')
    })

    /*
    * 1. increase row point when row point is 0
    * 2. increase row point when previously increased and the point number is within 1 to table row size
    * 3. other than that, decrease row point
    */
    shouldIncreaseOffset = atRow === 0 || (shouldIncreaseOffset && atRow >= 1 && atRow + 1 < table.length)
    atRow = (shouldIncreaseOffset ? atRow + 1 : atRow - 1)
  })

  // join the resulting rows all togeter into a string
  result = table.join('').replace(/,|_/g, '')
  return result
}
