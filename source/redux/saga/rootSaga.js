import { takeLatest } from "redux-saga/effects";
import { handleGetAllPokemon, handleGetPokemonDetail, handleGetNewPokemonList } from "./handler/pokemon";
import { handleGetAllItem, handleGetItemDetail } from './handler/item';
import { GET_NEW_POKEMON_LIST, GET_POKEMON, GET_POKEMON_BY_ID, } from '../injector/pokemon';
import { GET_ITEM, GET_ITEM_BY_ID } from '../injector/item';

export function* watcherSaga() {
    yield takeLatest(GET_POKEMON, handleGetAllPokemon);
    yield takeLatest(GET_ITEM, handleGetAllItem);
    yield takeLatest(GET_POKEMON_BY_ID, handleGetPokemonDetail);
    yield takeLatest(GET_ITEM_BY_ID, handleGetItemDetail);
    yield takeLatest(GET_NEW_POKEMON_LIST, handleGetNewPokemonList)
}