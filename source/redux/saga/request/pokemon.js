import axios from 'axios';

export function requestAllPokemon() {
    return axios.request({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon?limit=50`
    })
}

export function requestPokemonDetail(param) {
    return axios.request({
        method: 'get',
        url: param
    })
}

export function requestNewPokemonList(param) {
    return axios.request({
        method: 'get',
        url: param
    })
}