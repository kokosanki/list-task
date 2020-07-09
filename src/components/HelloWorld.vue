<template>
  <div class="hello">
    <ol>
      <li v-for="item in 10" :key="item">
        <a :href="`#${item}`">Jump to {{item}}</a>
      </li>
    </ol>
    <div v-for="item in 10" :key="item">
      <h2 :id="item">{{ item }}</h2>
      <LoremIpsum add="1p" />
    </div>
  </div>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum';

export default {
  name: 'HelloWorld',
  components: { LoremIpsum },
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<style scoped lang="scss">
li {
  text-align: left;
}
</style>
