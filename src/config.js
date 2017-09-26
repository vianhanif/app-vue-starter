import { jefferson, scytale, railFence } from '@/crypto'

export default {
  app: {
    title: 'Collision Tester - RailFence(Jefferson(Scytale(DATA)))',
    SHA (text) {
      return railFence(jefferson(scytale(text)))
    }
  }
}
