<template>
  <v-app class="site">
    <div id="app" class="app">
      <Nav />
      <router-view class="app-content" />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.app-content {
  flex-grow: 1;
}
</style>
