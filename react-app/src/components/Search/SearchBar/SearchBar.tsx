import React, {FunctionComponent} from "react";
import {Input} from "antd";
import { SearchBarProps } from "./interfaces/SearchBarProps";
import styles from "./SearchBar.module.scss";

export const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
    const {Search} = Input;

    return (
        <Search className={styles.pokemonSearch} placeholder="Pikachu, Mewtwo or 5" onSearch={props.onSearch} enterButton />
    )
}
