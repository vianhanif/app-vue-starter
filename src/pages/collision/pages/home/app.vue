<template>
  <div>
    <home-header/>
    <div class="text-xs-center mb-5">
      <!-- <v-progress-linear
        v-model="progressCount"
      /> -->
      <v-text-field
        v-if="Table.items.length > 0"
        append-icon="search"
        name="search"
        label="Search Table"
        @input.native="handleSearch"
        :value="Table.search"
        single-line/>
      <v-data-table
        dark
        :headers="Table.headers"
        :items="Table.items"
        :search="Table.search"
        class="elevation-1 white"
        >
        <template slot="items" scope="props">
          <td class="text-xs-left">{{props.item.count}}</td>
          <td class="text-xs-left">{{props.item.input}}</td>
          <td class="text-xs-left">{{props.item.output}}</td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import * as Action from 'store/collision/action-types'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      Table: Action.TABLE,
      Data: Action.DATA
    }),
    progressCount () {
      let {count, maxCount} = this.Data
      return (count / maxCount) * 100
    }
  },
  methods: {
    handleSearch (e) {
      this.$store.commit(Action.SET_TABLE_SEARCH, e.target.value)
    }
  },
  components: {
    'home-header': require('page/collision/pages/home/components/header/app')
  }
}
</script>
<style lang="scss" scoped>
</style>
