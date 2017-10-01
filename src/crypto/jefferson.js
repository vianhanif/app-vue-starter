const possibleTokens = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789` !@#$%^&*()_ +-=/[]{}|;\'\\:",.<>?'
const shifter = 5
// setup letters into a one line for each possible disk
const data = () => {
  let val = []
  possibleTokens.split('').forEach((letter, index) => {
    val.push(letter)
  })
  return val
}

const assignLetters = (text, disks) => {
  // assign each desired token into each own disk
  text.split('').forEach((token, index) => {
    let position = 0
    let disk = []
    data().forEach((letter, _index) => {
      disk.push(letter)
      if (token === letter) {
        position = _index
      }
    })
    disks.push({ position, disk })
  })
}

// encryption method
export const encrypt = (text) => {
  let disks = []
  let result = ''
  assignLetters(text, disks)
  // shift all disk together to the right on shifter size, thus generatng a new random word
  disks.forEach((item, index) => {
    let position = () => {
      // make sure the shifter roll the disk correctly
      if (item.position + shifter >= item.disk.length) {
        return (item.position + shifter) % item.disk.length
      } else {
        return item.position + shifter
      }
    }
    result += item.disk[position()]
  })
  return result
}

// decryption method
export const decrypt = (text) => {
  let disks = []
  let result = ''
  assignLetters(text, disks)
  // shift all disk together to the left on shifter size, thus generatng a new random word
  disks.forEach((item, index) => {
    let position = () => {
      // make sure the shifter roll the disk correctly
      if (item.position - shifter < 0) {
        return ((item.position - shifter) % item.disk.length) * -1
      } else {
        return item.position - shifter
      }
    }
    result += item.disk[position()]
  })
  return result
}
