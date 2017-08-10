<template lang="html">
  <v-app id="example-2" standalone>
    <v-navigation-drawer absolute persistent light :mini-variant.sync="mini" v-model="drawer" overflow>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="indigo darken-4" dark>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <div class="title">Click on sidebar to re-open.</div>
        <!--v-router-->
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'Main',
  head: {
    title: {
      inner: 'Home'
    }
  },
  data () {
    return {
      drawer: true,
      items: [
        {
          title: 'Home',
          icon: 'dashboard'
        },
        {
          title: 'About',
          icon: 'question_answer'
        }
      ],
      mini: false,
      right: null
    }
  }
}
</script>
