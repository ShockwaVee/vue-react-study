<template>
  <div id="app">
    <Search></Search>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "@/components/Search.vue";

export default Vue.extend({
  name: "App",
  components: {
    Search
  }
});
</script>

<style lang="scss">
#app {
  max-width: 60%;
  margin: 16px auto 0 auto;
}
</style>
