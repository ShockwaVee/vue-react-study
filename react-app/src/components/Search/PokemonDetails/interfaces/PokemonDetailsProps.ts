import { Pokemon } from "../../../../interfaces/global/Pokemon";

export interface PokemonDetailsProps{
    pokemon: Pokemon | null;
    addFavouritePokemon: (pokemon: Pokemon) => void;
}
