<template>
  <div>
    <ol>
      <li v-for="item in 10" :key="item">
        <router-link :to="`/article/${item}`">Jump to {{ item }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
li {
  text-align: left;
}
</style>
