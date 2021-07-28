import { call, put } from 'redux-saga/effects';
import { requestAllPokemon } from '../request/pokemon';
import { setPokemon } from '../../injector/pokemon';

export function* handleGetAllPokemon(action) {
    try {
        const response = yield call(requestAllPokemon);
        const data = response.data.results;
        // console.log({ data });
        yield put(setPokemon(data));
    } catch (error) {
        console.log(error);
    }
}