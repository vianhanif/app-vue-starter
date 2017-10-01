import * as scytale from './scytale'
import * as jefferson from './jefferson'
import * as railFence from './railFence'

const crypto = {
  scytale,
  jefferson,
  railFence
}

export const encrypt = (args = [], text) => {
  let result = text
  args.forEach((item) => {
    result = crypto[item].encrypt(result)
  })
  return result
}

export const decrypt = (args = [], text) => {
  let result = text
  args.reverse().forEach((item) => {
    result = crypto[item].decrypt(result)
  })
  return result
}

export const collection = {
  encrypt,
  decrypt,
  ...crypto
}
