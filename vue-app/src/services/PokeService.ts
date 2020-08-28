import Vue from "vue";
import { AxiosResponse } from "axios";

export class PokeService {
  static async findPokemonByIdOrName(idOrName: string | number) {
    let pokemon;
    try {
      pokemon = (await Vue.axios.get(`/pokemon/${idOrName}`)) as AxiosResponse;
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve(pokemon.data);
  }
}
