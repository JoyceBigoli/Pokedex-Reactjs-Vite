import React from'react';

const FavoriteContext = React.createContext ({
    favoritePokemons: [],
    updatefavoritePokemons: (id) => null

});

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;
    