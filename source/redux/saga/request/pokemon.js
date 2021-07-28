import axios from 'axios';

export function requestAllPokemon() {
    return axios.request({
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/'
    })
}