import { AnyAction, applyMiddleware, compose, createStore, Dispatch, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas/index';
import statusReducer, { IStatusReducer } from './status';

export interface IReduxState {
    status: IStatusReducer;
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadState = composeEnhancers(applyMiddleware(sagaMiddleware));
const store: Store<IReduxState, AnyAction> & {
    dispatch: Dispatch;
} = createStore(statusReducer, preloadState);
sagaMiddleware.run(rootSaga);

export default store;
