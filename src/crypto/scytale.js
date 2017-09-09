export default (text) => {
  let result = ''
  let token = () => {
    let val = []
    text.split('').forEach((item, index) => {
      val.push(text.replace(/\s/g, '').charAt(index))
    })
    return val
  }
  let isNull = (value) => {
    return value === undefined ? '' : value
  }
  let kolom = 5
  let tokenInputCount = 0
  let array = []
  let barisCount = 0
  token().forEach((item, index) => {
    let _array = []
    let _kolom = kolom
    while (_kolom > 0) {
      _array.push(token()[tokenInputCount])
      tokenInputCount++
      _kolom--
    }
    barisCount++
    array.push(_array)
  })
  array[0].forEach((item, kolom) => {
    for (let baris = 0; baris < barisCount; baris++) {
      result += isNull(array[baris][kolom])
    }
  })
  return result
}
