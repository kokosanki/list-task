<template>
    <v-footer
      color="#29006b"
      dark
      sticky
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h4>User History</h4>
        <ul class="footer__list">
          <li v-for="(item, index) in routeHistory" :key="index">
            <v-icon color="#fff" small>arrow_right_alt</v-icon>
          {{item}}</li>
        </ul>
      </v-col>
    </v-footer>
</template>

<script>
import store from '../store';

export default {
  computed: {
    lastRoute() {
      return this.$route.path;
    },
    routeHistory() {
      let hist = store.routeHistory;
      hist = hist.map((item) => (item === '/' ? 'Home' : item.slice(-1)));
      return hist;
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      store.routeHistory.push(this.$route.path);
    },
  },
  created() {
    store.routeHistory.push(this.$route.path);
  },
};
</script>

<style lang="scss">
  .footer__list {
    list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
      }
  }
</style>
