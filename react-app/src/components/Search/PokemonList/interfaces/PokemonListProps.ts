import { Pokemon } from "../../../../interfaces/global/Pokemon";

export interface PokemonListProps {
    favouritePokemon: Set<Pokemon>;
    removeFavourite: (id: number) => void;
}
