import { encrypt } from '@/crypto'

export default {
  app: {
    title: 'Collision Tester - SJR(DATA)',
    SHA (text) {
      return encrypt([
        'scytale',
        'jefferson',
        'railFence'
      ], text)
    }
  }
}
