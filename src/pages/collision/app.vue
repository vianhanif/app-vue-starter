<template>
  <app-drawer
    :title="title"
    :menus="AppMenus"
    :container='AppContainer'
    >
    <v-layout row wrap>
      <v-flex xs10 offset-xs1 md6 offset-md3>
        <p v-if="$route.path === '/app/home' || $route.path === '/app/samples'">
          Instructions for First Time Use:
          <ol>
            <li>Insert data samples. click (<v-icon>menu</v-icon>), then select "Samples"</li>
            <li>In "Samples" page, enter sample data as much as you want. (all data here will be used for collision test)</li>
            <li>After finish, you can go back to main page. click (<v-icon>menu</v-icon>), then select "Home"</li>
            <li>In this state, you have several sample data to test with. Now, Enter the data you want to test in the form "Test Data". You will see the resulting hash it generates on "Hash :".</li>
            <li>Next, click "Run" to start the test. This action will test your data whether your data has any collision with any of your samples.</li>
            <li>You will see a notice saying "Match found" if there is a match. This means the data has a collision. Or if not, The app will continue looking until the last sample and stop itself.</li>
            <li>You can reset your test anytime by clicking "Reset"</li>
          </ol>
        </p>
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
import * as Action from 'store/collision/action-types'
import config from '@/config'

export default {
  name: 'SHAMain',
  computed: {
    ...mapGetters({
      AppMenus: Action.APP_MENUS,
      AppContainer: Action.APP_CONTAINER
    })
  },
  data () {
    return {
      title: config.app.title
    }
  },
  components: {
    'app-drawer': require('components/AppDrawer/app')
  }
}
</script>
<style lang="scss" scoped>
</style>
