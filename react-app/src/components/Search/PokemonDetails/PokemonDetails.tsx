import React, { FunctionComponent } from "react";
import { PokemonDetailsProps } from "./interfaces/PokemonDetailsProps";
import styles from "./PokemonDetails.module.scss";
import { PokemonType } from "../../../interfaces/global/PokemonType";
import { Button, Tag } from "antd";

export const PokemonDetails: FunctionComponent<PokemonDetailsProps> = ({pokemon, addFavouritePokemon}) => {
    const renderTypes = (types: PokemonType[]) => {
        return types.map((type: PokemonType) => {
            return (
                <Tag key={type.type.name} className={styles.typeTag} color="blue">{type.type.name}</Tag>
            )
        })
    }

    if (pokemon == null) {
        return (
            <div>
                Please search for a Pokemon.
            </div>
        )
    }
    return (
        <div>
            <div className={styles.pokemonWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={pokemon.sprites.front_default} alt="pokemon" />
                </div>
                <table className={styles.pokemonDetails}>
                    <tbody>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td style={{textTransform: 'capitalize'}}>
                            {pokemon.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            ID
                        </td>
                        <td>
                            {pokemon.id}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Types
                        </td>
                        <td>
                            {renderTypes(pokemon.types)}
                        </td>
                    </tr>
                    <tr>
                        <td>Base experience</td>
                        <td>{pokemon.base_experience}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{pokemon.height}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{pokemon.weight}</td>
                    </tr>
                    </tbody>
                </table>
                <Button type="primary" className={styles.addButton} onClick={()=>{addFavouritePokemon(pokemon)}}>Add to favourites</Button>
            </div>
        </div>
    )
}
