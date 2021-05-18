import { statusEndPointResponse } from '../mocks/stats-endpoint-mock';
import { mockPromise } from '../utils/mock-promise';

export const getStatusAPI = () => {
    return mockPromise(statusEndPointResponse);
};
