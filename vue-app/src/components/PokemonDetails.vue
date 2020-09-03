<template>
  <div>
    <div class="pokemon-wrapper" v-if="pokemon">
      <div class="image-wrapper">
        <img :src="pokemon.sprites.front_default" />
      </div>
      <table>
        <tr>
          <td>
            Name
          </td>
          <td style="text-transform: capitalize">
            {{ pokemon.name }}
          </td>
        </tr>
        <tr>
          <td>
            ID
          </td>
          <td>
            {{ pokemon.id }}
          </td>
        </tr>
        <tr>
          <td>
            Types
          </td>
          <td>
            <a-tag
              class="type-tag"
              color="blue"
              :key="type"
              v-for="type in formattedTypes"
            >
              {{ type }}
            </a-tag>
          </td>
        </tr>
        <tr>
          <td>Base experience</td>
          <td>{{ pokemon.base_experience }}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{{ pokemon.height }}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{{ pokemon.weight }}</td>
        </tr>
      </table>

      <a-button type="primary" @click="onAddToFavourites" class="add-button"
        >Add to favourites</a-button
      >
    </div>
    <div v-else>
      Please search for a Pokemon.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PokemonType } from "@/interfaces/PokemonDetails/PokemonTypes";

export default Vue.extend({
  name: "PokemonDetails",
  props: ["pokemon"],
  computed: {
    formattedTypes() {
      if (this.pokemon == null) {
        return [];
      }
      return this.pokemon.types.map((type: PokemonType) => type.type.name);
    }
  },
  methods: {
    onAddToFavourites() {
      this.$emit("add-to-favourites", this.pokemon);
    }
  }
});
</script>

<style scoped lang="scss">
.pokemon-wrapper {
  width: 360px;
  margin: 16px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid #003a70;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

table {
  width: 100%;
  border-top: 4px solid #003a70;
  border-bottom: 4px solid #003a70;

  tr {
    background-color: #3d7dca;
    color: white;
    &:nth-child(odd) {
      background-color: #ffcb05;
      color: black;
    }
  }

  td {
    border-right: 4px solid #003a70;
    font-size: 22px;
    width: 50%;
    padding: 4px 8px;
  }

  td {
    &:nth-child(2) {
      border-right: none;
      text-align: right;
    }
  }
}

.add-button {
  margin: 8px 0;
  background-color: #3d7dca;
}

.type-tag {
  text-transform: capitalize;
}
</style>
