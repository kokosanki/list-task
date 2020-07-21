<template>
  <div>
      <v-icon @click="drawer = !drawer" color="pink">dehaze</v-icon>
    <v-navigation-drawer v-model="drawer"
        color="pink"
        absolute
        dark>
        <v-icon @click="drawer = !drawer">dehaze</v-icon>
    <v-list dense
          nav>
      <v-list-item
      v-for="item in 10" :key="item" :to="`/article/${item}`">
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
