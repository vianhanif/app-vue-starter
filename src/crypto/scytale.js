export default (text) => {
  let result = ''
  let sideSize = 5
  let sides = []
  let _side = 0

  // initialize each side block
  while (_side < sideSize) {
    sides.push([])
    _side++
  }
  _side = 0

  // starting rolling each letter to each side as if rolling a long paper at sideSize block
  text.replace(/\s/g, '').split('').forEach((token, index) => {
    sides[_side].push(token)
    _side++
    if (_side >= sideSize) {
      _side = 0
    }
  })

  // combine all side shown letters into one word
  sides.forEach((side, index) => {
    result += side.join('')
  })
  return result
}
