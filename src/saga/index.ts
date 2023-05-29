import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getArticle, updateArticle } from '@/Slice/article';

function* fetchArticle(action: PayloadAction<number>) {
    try {
        const user: AxiosResponse<any> = yield call('', action.payload);
        yield put(updateArticle({} as any))
    } catch (e) {
        console.warn(e);
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* watchMySaga() {
    yield takeLatest(getArticle.type, fetchArticle)
}