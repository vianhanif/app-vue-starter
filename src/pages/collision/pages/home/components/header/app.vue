<template>
  <v-layout row wrap>
    <v-flex xs10>
      <v-text-field
        name="testInput"
        label="Test Data"
        @input.native="handleInput"
        :value="Data.input"
        :disabled="Data.loading || Table.items.length > 0"
        multi-line/>
    </v-flex>
    <v-flex xs2>
      <v-btn class="yellow accent-1"
        v-if="Table.items.length > 0 && !Data.loading"
        @click.native="handleResetTest()">
        Reset
      </v-btn>
      <v-btn v-if="!Data.matched && Data.count < Sample.length"
      class="yellow accent-1" @click.native="handleTest()" :disabled="Sample.length <= 0">
        {{App.test.btn}}
      </v-btn>
    </v-flex>
    <v-layout row wrap>
      <v-flex xs12>
        <p class="subheading text-xs-left">
          Test Hash :
          <br/>
          {{wrapText(Data.match)}}
        </p>
        <p class="subheading text-xs-left">
          Finding Match ({{matchCount}}) :
          <br/>
          {{Data.lastResult.input}}
        </p>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import * as Action from 'store/collision/action-types'
import Global from '@/mixins/global'

export default {
  name: 'ShaHomeHeader',
  mixins: [Global],
  computed: {
    ...mapGetters({
      Data: Action.DATA,
      App: Action.APP,
      Table: Action.TABLE,
      Time: Action.TIME_ELAPSED,
      Sample: Action.SAMPLES
    }),
    time () {
      let {second, minute, hour} = this.Time
      let _second = String(second).length < 2 ? ('0' + second) : second
      let _minute = String(minute).length < 2 ? ('0' + minute) : minute
      let _hour = String(hour).length < 2 ? ('0' + hour) : hour
      return `${_hour}:${_minute}:${_second}`
    },
    matchCount () {
      let {count} = this.Data
      return `${this.delimeter(count)} / ${this.delimeter(this.Sample.length)}`
    }
  },
  mounted () {
    let self = this
    let data = this.Data
    let time = this.Time
    let samples = this.Sample
    window.setInterval(() => {
      if (data.loading) {
        self.runTest({data, samples, time})
      }
    }, 1)
    window.setInterval(() => {
      if (data.loading) {
        self.$store.commit(Action.TICK_TIME)
      }
    }, 1000)
  },
  methods: {
    wrapText (text) {
      let _text = ''
      for (let i = 0; i < text.length; i++) {
        if (i > 0 && i % 97 === 0) {
          _text += '\n'
        } else {
          _text += text.charAt(i)
        }
      }
      return _text
    },
    ...mapActions({
      runTest: Action.RUN_TEST,
      stopTest: Action.STOP_TEST
    }),
    handleInput (e) {
      this.$store.commit(Action.SET_TEST_INPUT, e.target.value)
      this.$store.commit(Action.SET_MATCH, e.target.value)
    },
    handleResetTest () {
      this.$store.commit(Action.RESET_TEST_COUNT)
      this.$store.commit(Action.CLEAR_TEST_DATA)
      this.$store.commit(Action.SET_MATCH, '')
      this.$store.commit(Action.SET_TEST_INPUT, '')
      this.$store.commit(Action.RESET_RANDOM_DATA)
      this.$store.commit(Action.RESET_TICK_TIME)
      this.$store.commit(Action.SET_MATHCED, false)
    },
    handleTest () {
      if (this.Data.loading) {
        this.stopTest()
      } else {
        if (this.Data.input !== null && this.Data.input !== '') {
          this.$store.commit(Action.RUN_PROCESS)
        }
      }
    }
  },
  data () {
    return {
      input: ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
