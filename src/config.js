export default {
  app: {
    possibleChar: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_+-=[]{}|;\'\\:",./<>?',
    maxCount: 56,
    SHA: require('js-sha256').sha224
  }
}
