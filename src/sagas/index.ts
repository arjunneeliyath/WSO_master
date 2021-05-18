import { all, takeLatest } from 'redux-saga/effects';
import { GET_STATUS } from '../modules/status';
import { getStatusSaga } from './status';

export function* rootSaga() {
    yield all([takeLatest(GET_STATUS, getStatusSaga)]);
}
