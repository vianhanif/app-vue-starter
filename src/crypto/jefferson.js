export default (text) => {
  let result = ''
  let data = () => {
    let val = []
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter, index) => {
      val.push(letter)
    })
    return val
  }
  let disks = []
  let shifter = 4
  text.split('').forEach((token, index) => {
    let position = 0
    let disk = []
    data().forEach((letter, _index) => {
      disk.push(letter)
      if (token === letter) {
        position = index
      }
    })
    disks.push({ position, disk })
  })
  disks.forEach((item, index) => {
    result += item.disk[(item.position + shifter) % item.disk.length]
  })
  return result
}
