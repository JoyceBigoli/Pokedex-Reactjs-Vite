import React, { useState } from "react";
import styles from "./styles.module.css";

const Searchbar = ({onSearch}) => {
  const [search, setSearch] = useState("dito");
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if(e.target.value.length === 0) {
        onSearch(undefined)
    }
  };
  const onButtonClickHandler = () => {
    onSearch(search);
  };
  

  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.searchbar}>
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>
      <div className={styles.searchbarBtn}>
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};
export default Searchbar;
