<template>
  <div>
    <home-header/>
    <div class="text-xs-center mb-5">
      <!-- <v-progress-linear
        v-model="progressCount"
      /> -->
      <v-text-field
        v-if="shaTable.items.length > 0"
        append-icon="search"
        name="search"
        label="Search Table"
        @input.native="handleSearch"
        :value="shaTable.search"
        single-line/>
      <v-data-table
        dark
        :headers="shaTable.headers"
        :items="shaTable.items"
        :search="shaTable.search"
        class="elevation-1 white"
        >
        <template slot="items" scope="props">
          <td class="text-xs-left">{{props.item.count}}</td>
          <td class="text-xs-left">{{props.item.time}}</td>
          <td class="text-xs-left">{{props.item.input}}</td>
          <td class="text-xs-left">{{props.item.output}}</td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import * as shaAction from 'store/collision/action-types'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      shaTable: shaAction.SHA_TABLE,
      shaData: shaAction.SHA_DATA
    }),
    progressCount () {
      let {count, maxCount} = this.shaData
      return (count / maxCount) * 100
    }
  },
  methods: {
    handleSearch (e) {
      this.$store.commit(shaAction.SET_TABLE_SEARCH, e.target.value)
    }
  },
  components: {
    'home-header': require('page/collision/pages/home/components/header/app')
  }
}
</script>
<style lang="scss" scoped>
</style>
