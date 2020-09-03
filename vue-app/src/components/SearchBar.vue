<template>
  <a-input-search
    class="pokemon-search"
    placeholder="Pikachu, Mewtwo or 5"
    enter-button
    @search="onSearch"
  />
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "SearchBar",
  props: {
    onSearch: {
      type: Function as PropType<(searchQuery: string) => void>,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
.pokemon-search {
  margin-bottom: 24px;
}
</style>
