import { encrypt } from '@/crypto'

export default {
  app: {
    title: 'Collision Tester - Scytale(RailFence(Jefferson(DATA)))',
    SHA (text) {
      return encrypt([
        'jefferson',
        'railFence',
        'scytale'
      ], text)
    }
  }
}
