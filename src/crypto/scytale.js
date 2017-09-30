const sideSize = 5

// initialize each side block
const initialize = (sides, size) => {
  let side = 0
  while (side < size) {
    sides.push([])
    side++
  }
}

// starting rolling each letter to each side as if rolling a long paper at sideSize block
const rollLetters = (text, sides, size) => {
  let side = 0
  text.split('').forEach((letter, index) => {
    sides[side].push(letter)
    side++
    if (side >= size) {
      side = 0
    }
  })
}

export const encrypt = (text) => {
  let result = ''
  let sides = []

  initialize(sides, sideSize)
  rollLetters(text, sides, sideSize)

  // combine all side shown letters into one word
  sides.forEach((side, index) => {
    result += side.join('')
  })
  return result
}

export const decrypt = (text) => {
  let result = ''
  let letters = text.split('')
  let sides = []

  initialize(sides, sideSize)

  let position = 0

  sides.forEach((side) => {
    let count = 1
    while (position < letters.length && count < sideSize) {
      side.push(letters[position])
      position++
      count++
    }
    count = 0
  })

  position = 0

  while (position < sideSize) {
    sides.forEach((side) => {
      if (position < side.length) {
        result += side[position]
      }
    })
    position++
  }

  return result
}
