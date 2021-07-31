import { call, put } from 'redux-saga/effects';
import { requestAllItem, requestItemDetail, requestNewItemList } from '../request/item';
import { setItem, setItemById, setNewItemList, setNextUrl } from '../../injector/item';

export function* handleGetAllItem() {
    try {
        const response = yield call(requestAllItem);
        const data = response.data.results;
        const nextUrl = response.data.next;
        yield put(setItem(data));
        yield put(setNextUrl(nextUrl));
    } catch (error) {
        console.log(error);
    }
}

export function* handleGetItemDetail(action) {
    try {
        const response = yield call(requestItemDetail, action.param);
        const data = response.data;
        yield put(setItemById(data));
    } catch (error) {
        console.log(error);
    }
}

export function* handleGetNewItemList(action) {
    try {
        const response = yield call(requestNewItemList, action.param);
        const data = response.data.results;
        const nextUrl = response.data.next;
        yield put(setNewItemList(data));
        yield put(setNextUrl(nextUrl));
    } catch (error) {
        console.log(error);
    }
}