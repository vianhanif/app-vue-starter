import { jefferson, scytale } from '@/crypto'

export default {
  app: {
    title: 'Collision Tester - Jefferson(Scytale(DATA))',
    SHA (text) {
      return jefferson(scytale(text))
    }
  }
}
