import { call, put } from 'redux-saga/effects';
import { getStatusAPI } from '../end-points';
import { IStatusResponse } from '../interfaces/statusResponse';
import { getStatusSuccessAction } from '../modules/status';

export function* getStatusSaga() {
    try {
        const status: IStatusResponse = yield call(getStatusAPI);
        yield put(getStatusSuccessAction(status));
    } catch (error) {
        // TODO: handle error
    }
}
