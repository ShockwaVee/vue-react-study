import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar/SearchBar";
import { notification } from "antd";
import { PokemonDetails } from "./PokemonDetails/PokemonDetails";
import { Pokemon } from "../../interfaces/global/Pokemon";
import { PokemonList } from "./PokemonList/PokemonList";
import styles from "./Search.module.scss";

export const Search: FunctionComponent = () => {
    const [query, setQuery] = useState("");
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [favouritePokemon, setFavouritePokemon] = useState(new Set<Pokemon>());
    const fetchPokemon = useCallback(async () => {
        let pokemon;
        try {
            pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${query}`);
        } catch (e) {
            notification.error({
                message: "Pokemon doesn't exist",
                description: "A Pokemon by this ID or name does not exist."
            });
            return;
        }

        setCurrentPokemon(pokemon.data);
    }, [query]);

    const searchPokemonByIdOrName = (idOrName: string) => {
        setQuery(idOrName);
    }

    const addToFavourites = (pokemon: Pokemon)  => {
        setFavouritePokemon(new Set<Pokemon>([...Array.from(favouritePokemon), pokemon]))
    }

    const removeFromFavourites = (id: number) => {
        const filteredFavouritePokemon = Array.from(favouritePokemon).filter((pokemon: Pokemon) => {
            return pokemon.id !== id;
        })
        setFavouritePokemon(new Set(filteredFavouritePokemon));
    }



    useEffect(() => {
        if (query !== "") {
            fetchPokemon();
        }
    }, [fetchPokemon, query]);

    return (
        <div>
            <SearchBar onSearch={searchPokemonByIdOrName} />
            <div className={styles.wrapper}>
                <PokemonDetails pokemon={currentPokemon} addFavouritePokemon={addToFavourites}/>
                <PokemonList favouritePokemon={favouritePokemon} removeFavourite={removeFromFavourites}/>
            </div>
        </div>
    )
}
