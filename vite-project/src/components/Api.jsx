export const searchPokemon = async (pokemon) => {
    try { 
        let URL =`https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(URL)
        return await response.json()
        
    } catch (error) {
        console.log('error:', error)
    }
}

export const getPokemons = async (limit = 50, offset = 0 ) => {
    try { 
        let URL =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(URL)
        return await response.json()
        
    } catch (error) {
        console.log('error:', error)
    }
}
export const getPokemonData = async (URL) => {
    try { 
        const response = await fetch(URL)
        return await response.json()
        
    } catch (error) {
        console.log('error:', error)
    }
}