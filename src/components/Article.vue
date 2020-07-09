<template>
  <div>
    <h2>{{ $route.params.id }}</h2>
    <LoremIpsum add="1p" />
    <a @click="$router.go(-1)">Go back</a>
  </div>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum';

export default {
  components: { LoremIpsum },
};
</script>

<style scoped lang="scss">
a {
  color: blue;
  font-weight: bold;
  cursor: pointer;
}
</style>
