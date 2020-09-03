<template>
  <div>
    <SearchBar :on-search="searchPokemonByIdOrName"></SearchBar>
    <div class="wrapper">
      <PokemonDetails
        :pokemon="currentPokemon"
        @add-to-favourites="onAddToFavourites"
      ></PokemonDetails>
      <PokemonList
        :favourite-pokemon="favouritePokemon"
        @remove-favourite="onRemoveFromFavourites"
      ></PokemonList>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PokeService } from "@/services/PokeService";
import SearchBar from "@/components/SearchBar.vue";
import PokemonDetails from "@/components/PokemonDetails.vue";
import PokemonList from "@/components/PokemonList.vue";
import { Pokemon } from "@/interfaces/global/Pokemon";

export default Vue.extend({
  name: "Search",
  components: {
    SearchBar,
    PokemonDetails,
    PokemonList
  },
  data() {
    return {
      currentPokemon: null,
      favouritePokemon: []
    };
  },
  methods: {
    async searchPokemonByIdOrName(searchQuery: string | number) {
      let pokemon;
      try {
        pokemon = await PokeService.findPokemonByIdOrName(searchQuery);
      } catch (e) {
        this.$notification.error({
          message: "Pokemon doesn't exist",
          description: "A Pokemon by this ID or name does not exist."
        });
        return;
      }
      this.currentPokemon = pokemon;
    },
    onAddToFavourites(pokemon: Pokemon) {
      const pokemonSet: Set<Pokemon> = new Set(this.favouritePokemon);
      pokemonSet.add(pokemon);
      this.favouritePokemon = Array.from(pokemonSet);
    },
    onRemoveFromFavourites(id: number) {
      this.favouritePokemon = this.favouritePokemon.filter(
        (pokemon: Pokemon) => pokemon.id !== id
      );
    }
  }
});
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  & > div {
    flex: 1 0 50%;
  }
}
</style>
