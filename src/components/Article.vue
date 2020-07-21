<template>
  <v-container>
    <div>
      <h2 class="text-center">{{ $route.params.id }}</h2>
      <LoremIpsum add="1p" />
      <div class="d-flex flex-row justify-space-between">
        <v-icon color="pink" @click="$router.go(-1)" large>keyboard_backspace</v-icon>
        <v-icon color="pink" @click="$router.replace('/')" large>home</v-icon>
      </div>
    </div>
  </v-container>
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
