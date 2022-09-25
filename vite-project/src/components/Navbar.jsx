import React, {useContext} from "react";
import { AiFillHeart } from "react-icons/ai";
import FavoriteContext from "../contexts/favoritsContext";
import styles from "./styles.module.css";

const Navbar = () => {
  const {favoritePokemons} = useContext(FavoriteContext)
    const logoImg = 
    'https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?resize=696%2C256&ssl=1'
  return (
    <nav>
      <div>
        <img 
        alt= 'pokeapi_logo'
        src={logoImg}
        className={styles.navbarImg}
         />
      </div>
      <div>
      {favoritePokemons.length}<AiFillHeart/>
      </div>
    </nav>
  );
};
export default Navbar;
