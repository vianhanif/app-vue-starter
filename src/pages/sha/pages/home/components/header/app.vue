<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-text-field
        name="testInput"
        label="Sample Data"
        @input.native="handleInput"
        :value="shaData.input"
        :disabled="shaData.loading || shaTable.items.length > 0"
        single-line/>
    </v-flex>
    <v-flex xs8>
      <v-btn class="yellow accent-1"
        v-if="shaTable.items.length > 0 && !shaData.loading"
        @click.native="handleResetTest()">
        Reset Test
      </v-btn>
      <v-btn class="yellow accent-1" @click.native="handleTest()">
        {{shaApp.test.btn}}
      </v-btn>
    </v-flex>
    <v-layout row wrap>
      <v-flex xs12>
        <p class="subheading text-xs-left">
          Test Hash :
          <br/>
          {{shaData.match}}
        </p>
        <p class="subheading text-xs-left">
          Finding Match ({{matchCount}}) : {{shaData.lastResult.input}}
        </p>
        <p class="subheading text-xs-left">
          Time Elapsed: {{shaData.lastResult.time}}
        </p>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import * as shaAction from 'store/sha/action-types'
import Global from '@/mixins/global'

export default {
  name: 'ShaHomeHeader',
  mixins: [Global],
  computed: {
    ...mapGetters({
      shaData: shaAction.SHA_DATA,
      shaApp: shaAction.SHA_APP,
      shaTable: shaAction.SHA_TABLE,
      shaTime: shaAction.SHA_TIME_ELAPSED
    }),
    time () {
      let {second, minute, hour} = this.shaTime
      let _second = String(second).length < 2 ? ('0' + second) : second
      let _minute = String(minute).length < 2 ? ('0' + minute) : minute
      let _hour = String(hour).length < 2 ? ('0' + hour) : hour
      return `${_hour}:${_minute}:${_second}`
    },
    matchCount () {
      let {count, maxCount} = this.shaData
      return `${this.delimeter(count)} / ${this.delimeter(maxCount)}`
    }
  },
  mounted () {
    let self = this
    let data = this.shaData
    let time = this.shaTime
    window.setInterval(() => {
      if (data.loading) {
        console.log(time)
        self.runTest({data, time})
      }
    }, 1)
    window.setInterval(() => {
      if (data.loading) {
        self.$store.commit(shaAction.TICK_TIME)
      }
    }, 1000)
  },
  methods: {
    ...mapActions({
      runTest: shaAction.RUN_TEST,
      stopTest: shaAction.STOP_TEST
    }),
    handleInput (e) {
      this.$store.commit(shaAction.SET_TEST_INPUT, e.target.value)
      this.$store.commit(shaAction.SET_MATCH, e.target.value)
    },
    handleResetTest () {
      this.$store.commit(shaAction.RESET_TEST_COUNT)
      this.$store.commit(shaAction.CLEAR_TEST_DATA)
      this.$store.commit(shaAction.SET_MATCH, '')
      this.$store.commit(shaAction.SET_TEST_INPUT, '')
      this.$store.commit(shaAction.RESET_RANDOM_DATA)
      this.$store.commit(shaAction.RESET_TICK_TIME)
    },
    handleTest () {
      if (this.shaData.loading) {
        this.stopTest()
      } else {
        if (this.shaData.input !== null && this.shaData.input !== '') {
          this.$store.commit(shaAction.RUN_PROCESS)
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
