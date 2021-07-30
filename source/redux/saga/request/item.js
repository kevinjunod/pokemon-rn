import axios from 'axios';

export function requestAllItem() {
    return axios.request({
        method: 'get',
        url: 'https://pokeapi.co/api/v2/item/'
    })
}

export function requestItemDetail(param) {
    return axios.request({
        method: 'get',
        url: param
    })
}