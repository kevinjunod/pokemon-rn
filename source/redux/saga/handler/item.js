import { call, put } from 'redux-saga/effects';
import { requestAllItem, requestItemDetail } from '../request/item';
import { setItem, setItemById } from '../../injector/item';

export function* handleGetAllItem() {
    try {
        const response = yield call(requestAllItem);
        const data = response.data.results;
        yield put(setItem(data));
    } catch (error) {
        console.log(error);
    }
}

export function* handleGetItemDetail(action) {
    try {
        const response = yield call(requestItemDetail, action.param);
        // console.log(response.data);
        const data = response.data;
        yield put(setItemById(data));
    } catch (error) {
        console.log(error);
    }
}
