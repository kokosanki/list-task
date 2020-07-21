<template>
  <v-app>
    <div id="app">
      <Nav />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',

  components: {
    Nav,
  },
};
</script>
