import axios from 'axios';

export function requestAllItem() {
    return axios.request({
        method: 'get',
        url: `https://pokeapi.co/api/v2/item?limit=50`
    })
}

export function requestItemDetail(param) {
    return axios.request({
        method: 'get',
        url: param
    })
}

export function requestNewItemList(param) {
    return axios.request({
        method: 'get',
        url: param
    })
}