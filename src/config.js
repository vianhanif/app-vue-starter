import { encrypt } from '@/crypto'

export default {
  app: {
    title: 'Collision Tester - RailFence(Jefferson(Scytale(DATA)))',
    SHA (text) {
      return encrypt([
        'scytale',
        'jefferson',
        'railFence'
      ], text)
    }
  }
}
