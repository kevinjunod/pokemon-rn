import { call, put } from 'redux-saga/effects';
import { requestAllPokemon, requestPokemonDetail, requestNewPokemonList } from '../request/pokemon';
import { setPokemon, setPokemonById, setNewPokemonList, setNextUrl } from '../../injector/pokemon';

export function* handleGetAllPokemon() {
    try {
        const response = yield call(requestAllPokemon);
        const data = response.data.results;
        const nextUrl = response.data.next;
        yield put(setPokemon(data));
        yield put(setNextUrl(nextUrl));
    } catch (error) {
        console.log(error);
    }
}

export function* handleGetPokemonDetail(action) {
    try {
        const response = yield call(requestPokemonDetail, action.param);
        const data = response.data;
        yield put(setPokemonById(data));
    } catch (error) {
        console.log(error);
    }
}

export function* handleGetNewPokemonList(action) {
    try {
        const response = yield call(requestNewPokemonList, action.param);
        const data = response.data.results;
        const nextUrl = response.data.next;
        yield put(setNewPokemonList(data));
        yield put(setNextUrl(nextUrl));
    } catch (error) {
        console.log(error);
    }
}