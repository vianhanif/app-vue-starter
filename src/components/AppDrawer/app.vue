<template>
  <v-app standalone>
    <v-navigation-drawer absolute persistent light :mini-variant.sync="container.mini" v-model="container.drawer" overflow>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          v-for="item in menus"
          :key="item.title"
          @click.native="handleMenu(item.path)">
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
      <v-toolbar-side-icon @click.native.stop="container.drawer = !container.drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </main>
  </v-app>
</template>
<script>
export default {
  name: 'AppDrawer',
  props: ['container', 'menus', 'title'],
  methods: {
    handleMenu (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
