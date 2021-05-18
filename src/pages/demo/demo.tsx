import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import Button from '../../components/button/button';
import { getStatusAction, IStatusReducer } from '../../modules/status';
import { IReduxState } from '../../modules/store';

interface IStatusProps {
    getStatus: () => void;
    status: IStatusReducer;
}

const status = (props: IStatusProps) => {
    const { getStatus, status } = props;
    return (
        <div>
            <Button key="Button" value="Click to get Status" onClick={getStatus} />
            <div>{`Version: ${status.version}`}</div>
            <div>{`Status: ${status.apiStatus}`}</div>
        </div>
    );
};

const mapStateToProps = (state: IReduxState) => ({ status: state.status });
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    getStatus: () => dispatch(getStatusAction()),
});

const statusPage = connect(mapStateToProps, mapDispatchToProps)(status);

export default statusPage;
