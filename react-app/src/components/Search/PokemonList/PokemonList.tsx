import React, { FunctionComponent } from "react";
import { PokemonListProps } from "./interfaces/PokemonListProps";
import { Avatar, Button, List } from "antd";
import { Pokemon } from "../../../interfaces/global/Pokemon";
import styles from "./PokemonList.module.scss";

export const PokemonList: FunctionComponent<PokemonListProps> = ({favouritePokemon, removeFavourite}) => {
    return (
        <List bordered
              size="large"
              dataSource={Array.from(favouritePokemon)}
              locale={{emptyText: 'Search for a Pokemon and add it to your list of favourites'}}
              header={<h3>My favourite Pokemon</h3>}
              renderItem={(item: Pokemon) => {
                  return (
                      <List.Item className={styles.listItem}>
                          <List.Item.Meta avatar={<Avatar size={96} src={item.sprites.front_default} />}
                                          title={item.name} />
                          <Button onClick={() => {
                              removeFavourite(item.id)
                          }} danger>Remove</Button>
                      </List.Item>
                  )
              }}>

        </List>
    )
}
