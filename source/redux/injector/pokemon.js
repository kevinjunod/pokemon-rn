export const GET_POKEMON = 'getPokemon';
export const SET_POKEMON = 'setPokemon';

export const GET_POKEMON_BY_ID = 'getPokemonById';
export const SET_POKEMON_BY_ID = 'setPokemonById';

export const getPokemon = () => ({
    type: GET_POKEMON
});

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload
});

export const getPokemonById = () => ({
    type: GET_POKEMON_BY_ID
});

export const setPokemonById = (payload) => ({
    type: SET_POKEMON_BY_ID,
    payload
});

const initialState = {
    pokemonList: [],
    pokemonDetail: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            const { pokemon } = action;
            console.log(action.payload);
            return { ...state, pokemonList: action.payload }; //* function add list of pokemons to the array
        case SET_POKEMON_BY_ID:
            return { ...state, pokemonDetail: pokemon };//* function to add the pokemon detail to object
        default:
            return state;
    }
}