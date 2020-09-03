<template>
  <a-list
    :locale="{
      emptyText: 'Search for a Pokemon and add it to your list of favourites'
    }"
    :data-source="favouritePokemon"
  >
    <h3 slot="header">My favourite Pokemon</h3>
    <a-list-item size="large" bordered slot="renderItem" slot-scope="item">
      <a-list-item-meta>
        <a slot="title" class="pokemon-name">{{ item.name }}</a>
        <a-avatar :size="96" slot="avatar" :src="item.sprites.front_default" />
      </a-list-item-meta>
      <a-button type="danger" @click="onRemoveFavouritePokemon(item.id)"
        >Remove</a-button
      >
    </a-list-item>
  </a-list>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PokemonList",
  props: ["favouritePokemon"],
  methods: {
    onRemoveFavouritePokemon(id: number) {
      this.$emit("remove-favourite", id);
    }
  }
});
</script>

<style scoped lang="scss">
.pokemon-name {
  text-transform: capitalize;
}
.ant-list-item-meta {
  align-items: center;
}
</style>
