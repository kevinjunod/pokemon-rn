import { takeLatest } from "redux-saga/effects";
import { handleGetAllPokemon } from "./handler/pokemon";
import { GET_POKEMON } from '../injector/pokemon'

export function* watcherSaga() {
    yield takeLatest(GET_POKEMON, handleGetAllPokemon);
}