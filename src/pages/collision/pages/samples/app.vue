<template>
  <div>
    <v-text-field
      name="testInput"
      label="Enter Sample (ex:/ data 1)"
      v-model="value"
      :disabled="Data.loading || Table.items.length > 0"
      multi-line/>
      <v-btn class="yellow accent-1" @click.native="handleTest()" :disabled="value == ''">
        Add Test Sample
      </v-btn>
      <v-layout row wrap>
        <v-flex sm6
          v-for="(item, index) in Sample"
          :key="index">
          <v-card-text class="text-xs-left elevation-4">
            <pre>{{wrapText(item)}}</pre>
          </v-card-text>
        </v-flex>
      </v-layout>
  </div>
</template>
<script>
import * as Action from 'store/collision/action-types'
import { mapGetters } from 'vuex'

export default {
  name: 'Samples',
  computed: {
    ...mapGetters({
      Data: Action.DATA,
      Table: Action.TABLE,
      Sample: Action.SAMPLES
    })
  },
  methods: {
    wrapText (text) {
      let _text = ''
      for (let i = 0; i < text.length; i++) {
        if (i > 0 && i % 35 === 0) {
          _text += '\n'
        } else {
          _text += text.charAt(i)
        }
      }
      return _text
    },
    handleTest () {
      this.$store.commit(Action.ADD_SAMPLE, this.value)
      this.value = ''
    }
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.break-word {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
}
</style>
