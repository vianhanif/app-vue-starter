<template>
  <app-drawer
    title="SHA-224 Tester"
    :menus="shaAppMenus"
    :container='shaAppContainer'
    >
    <v-layout row wrap>
      <v-flex xs10 offset-xs1 md6 offset-md3>
        <v-card class="mt-5 white lighten-4 elevation-4">
          <v-card-text class="text-xs-right">
            <router-view></router-view>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </app-drawer>
</template>
<script>
import {mapGetters} from 'vuex'
import * as shaAction from 'store/sha/action-types'

export default {
  name: 'SHAMain',
  computed: {
    ...mapGetters({
      shaAppMenus: shaAction.SHA_APP_MENUS,
      shaAppContainer: shaAction.SHA_APP_CONTAINER
    })
  },
  components: {
    'app-drawer': require('components/AppDrawer/app')
  }
}
</script>
<style lang="scss" scoped>
</style>
