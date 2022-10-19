<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} - Cat` : `Cat`
    }}</template>
  </metainfo>
  <header />

  <router-view />
</template>

<script>
import { useMeta } from "vue-meta";
export default {
  setup() {
    useMeta({
      title: "",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
};
</script>

<style>
#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1e293b;
}
</style>
