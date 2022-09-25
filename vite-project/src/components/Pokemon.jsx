import React, { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FavoriteContext from "../contexts/favoritsContext";
import styles from "./styles.module.css";

export const Pokemon = ({ pokemon }) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? (
    <AiFillHeart />
  ) : (
    <AiOutlineHeart color='red' size='20'/>
  );
  return (
    
      <div className={styles.pokemonCard}>
        <div className={styles.pokemonImageContainer}>
          <img
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
            className={styles.pokemonImage}
          />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardTop}>
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>
          <div className={styles.cardBotton}>
            <div className={styles.pokemonType}>
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className={styles.pokemonTypeText}>
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <button className={styles.pokemonHeartBtn} onClick={onHeartClick}>
              {heart}
            </button>
          </div>
        </div>
      </div>
  );
};
