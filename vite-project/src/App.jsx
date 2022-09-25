import React from "react";
import styles from "./components/styles.module.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./components/api";
import { FavoriteProvider } from "./contexts/favoritsContext";
import { Footer } from "./components/Footer";

const favoritesKey = 'f'
function App() {
  
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setloading] = useState(false);
  const [notFound, setNotFound] = useState(false)
  const [pokemons, setpokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  const itensPerPage = 20
  const fechtPokemons = async () => {
    try {
      setloading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async(pokemon) => {
        return await getPokemonData (pokemon.url)
      })
      const results = await Promise.all(promises);
      setpokemons(results);
      setloading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("fechtpPokemons error:", error);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }
  useEffect(() => {
    loadFavoritePokemons();
  },[]);
  
  useEffect(() => {
    fechtPokemons();
  },[page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updateFavorites.slice(favoriteIndex, 1);
    }else {
      updateFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites));
    setFavorites(updateFavorites)
  }
  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
     return fechtPokemons();
    }
    setloading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if (!result) {
      setNotFound(true)
    } else { 
      setpokemons([result])
      setPage(0)
      setTotalPages(1)
    }
      setloading(false)
  }
  return (
    <FavoriteProvider className={styles.favorite}
    value={{
      favoritePokemons: favorites, 
      updateFavoritePokemons: updateFavoritePokemons,
    }}
    >
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
      {notFound ? (
        <div className={styles.notFoundText}>Meteu essa?! </div>
      ):
      (<Pokedex 
      pokemons={pokemons} 
      loading={loading} 
      page={page} 
      totalPages={totalPages}
      setPage={setPage}
      />)}  
    </div>
    <Footer/>
    </FavoriteProvider>
  );
}

export default App;
