export default (text) => {
  let possibleTokens = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_+-=[]{}|;\'\\:",./<>?'
  let result = ''

  // setup letters into a one line for each possible disk
  let data = () => {
    let val = []
    possibleTokens.split('').forEach((letter, index) => {
      val.push(letter)
    })
    return val
  }
  let disks = []
  let shifter = 5

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

  // shift all disk together on shifter size, thus generatng a new random word
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
