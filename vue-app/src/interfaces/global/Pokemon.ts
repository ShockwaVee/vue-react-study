import { PokemonType } from "@/interfaces/PokemonDetails/PokemonType";

export interface Pokemon{
    sprites: {
        front_default: string,
    },
    id: number,
    name: string,
    types: PokemonType[],
    base_experience: number,
    height: number,
    weight: number,
}
