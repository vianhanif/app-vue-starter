<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-text-field
        name="testInput"
        label="Input"
        @input.native="handleInput"
        :value="input.value"
        multi-line/>
    </v-flex>
    <v-flex xs12>
      <v-radio-group v-model="method">
        <v-layout row wrap>
          <v-flex xs3>
            <v-radio label="Encrypt" value="encrypt"/>
          </v-flex>
          <v-flex xs3>
            <v-radio label="Decrypt" value="decrypt"/>
          </v-flex>
        </v-layout>
      </v-radio-group>
    </v-flex>
    <v-flex xs3>
      <v-checkbox label="Scytale X" v-model="cryptor" value="scytale"/>
    </v-flex>
    <v-flex xs3>
      <v-checkbox label="Jefferson X" v-model="cryptor" value="jefferson"/>
    </v-flex>
    <v-flex xs3>
      <v-checkbox label="Rail Fence X" v-model="cryptor" value="railFence"/>
    </v-flex>
    <v-flex xs12>
      <v-card-text class="text-xs-left">
        <h6><b>Output : </b></h6>
        <h6 style="word-wrap: break-word;">
          {{cryptoResult}}
        </h6>
      </v-card-text>
    </v-flex>
  </v-layout>
</template>
<script>
import * as crypto from '@/crypto'

export default {
  name: 'Tester',
  computed: {
    cryptoResult () {
      let result = crypto[this.method](
        this.cryptor,
        this.input.value
      )
      return result
    }
  },
  methods: {
    handleInput (e) {
      this.input.value = e.target.value
      this.output.value = this.input.value
    }
  },
  data () {
    return {
      method: 'encrypt',
      cryptor: [],
      allcryptor: {
        jefferson: false,
        scytale: false,
        railFence: false
      },
      input: {
        value: ''
      },
      output: {
        value: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
