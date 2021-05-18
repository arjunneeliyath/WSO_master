import { AnyAction } from 'redux';
import { IReduxState } from './store';

export const GET_STATUS = 'GET_STATUS';
export const GET_STATUS_SUCCESS_ACTION = 'GET_STATUS_SUCCESS_ACTION';

export const getStatusAction = () => ({
    type: GET_STATUS,
});

export const getStatusSuccessAction = (value: IStatusReducer) => ({
    type: GET_STATUS_SUCCESS_ACTION,
    value,
});

export interface IStatusReducer {
    version: string;
    apiStatus: string;
}

const statusReducerInit = {
    version: '',
    apiStatus: '',
};

const statusReducer = (state: IReduxState = { status: statusReducerInit }, action: AnyAction): IReduxState => {
    switch (action.type) {
        case GET_STATUS_SUCCESS_ACTION:
            return {
                ...state,
                status: {
                    ...action.value,
                },
            };
    }
    return state;
};

export default statusReducer;
