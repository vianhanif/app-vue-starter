import { scytale, jefferson } from '@/crypto'

export default {
  app: {
    title: 'Collision Tester - Jefferson(Scytale(DATA))',
    possibleChar: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_+-=[]{}|;\'\\:",./<>?',
    maxCount: 56,
    SHA (text) {
      return jefferson(scytale(text))
    }
  }
}
