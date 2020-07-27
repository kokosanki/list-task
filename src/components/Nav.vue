<template>
  <div>
    <!-- dt -->
    <v-toolbar app dark color="#29006b" class="hidden-sm-and-down">
      <v-icon color="#fff" @click="$router.push('/')" large>home</v-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="#29006b"
        depressed v-for="item in 10"
        :key="item" :to="`/article/${item}`">{{ item }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- mb -->
    <v-icon class="hidden-sm-and-up" @click="drawer = !drawer" color="#29006b">dehaze</v-icon>
    <v-navigation-drawer
      class="hidden-sm-and-up"
      temporary
      v-model="drawer"
      color="#29006b"
      absolute
      dark
      :width="150"
    >
      <v-icon @click="drawer = !drawer">dehaze</v-icon>
      <v-list dense nav>
        <v-list-item v-for="item in 10" :key="item" :to="`/article/${item}`">
          <v-list-item-title class="d-flex justify-center">to {{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
</style>
