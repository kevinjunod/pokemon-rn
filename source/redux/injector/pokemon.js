export const GET_POKEMON = 'getPokemon';
export const SET_POKEMON = 'setPokemon';

export const GET_NEXT_URL = 'getNextUrl';
export const SET_NEXT_URL = 'setNextUrl';

export const GET_POKEMON_BY_ID = 'getPokemonById';
export const SET_POKEMON_BY_ID = 'setPokemonById';
export const CLEAR_POKEMON_BY_ID = 'clearPokemonById';

export const GET_NEW_POKEMON_LIST = 'getNewPokemonList';
export const SET_NEW_POKEMON_LIST = 'setNewPokemonList';

export const getPokemon = () => ({
    type: GET_POKEMON
});

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload
});

export const getNextUrl = (param) => ({
    type: GET_NEXT_URL,
    param
});

export const setNextUrl = (payload) => ({
    type: SET_NEXT_URL,
    payload
});

export const getPokemonById = (param) => ({
    type: GET_POKEMON_BY_ID,
    param
});

export const setPokemonById = (payload) => ({
    type: SET_POKEMON_BY_ID,
    payload
});

export const clearPokemonById = () => ({
    type: CLEAR_POKEMON_BY_ID,
});

export const getNewPokemonList = (param) => ({
    type: GET_NEW_POKEMON_LIST,
    param
});

export const setNewPokemonList = (payload) => ({
    type: SET_NEW_POKEMON_LIST,
    payload
});

const initialState = {
    pokemonList: [],
    pokemonDetail: null,
    nextUrl: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            const { pokemon } = action;
            return { ...state, pokemonList: action.payload };
        case SET_NEXT_URL:
            return { ...state, nextUrl: action.payload };
        case SET_POKEMON_BY_ID:
            return { ...state, pokemonDetail: action.payload };
        case CLEAR_POKEMON_BY_ID:
            return { ...state, pokemonDetail: null };
        case SET_NEW_POKEMON_LIST:
            return { ...state, pokemonList: [...state.pokemonList, ...action.payload] };
        default:
            return state;
    }
}