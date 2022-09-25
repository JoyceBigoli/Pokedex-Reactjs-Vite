import React from "react";
import { Pagination } from "./Pagination";
import { Pokemon } from "./Pokemon";
import styles from "./styles.module.css";


const Pokedex = ({ pokemons, loading, page, totalPages, setPage}) => {
  
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage (page-1);
    }
  }

  const onRightClickHandler = () => {
    if (page+1 !== totalPages){
      setPage (page+1);
    }
  }

  return (
    <div>
      <div className={styles.pokedexHeader}>
        <h1>Pokedex </h1>
        <Pagination
          page={page+1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando, segura fera... </div>
      ) : (
        <div className={styles.pokedexGrid}>
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon key={index} pokemon={pokemon}/>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Pokedex;
