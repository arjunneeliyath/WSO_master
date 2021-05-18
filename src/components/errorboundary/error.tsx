import React, { ReactElement, useEffect, useState } from 'react';
import { route_path } from '../../constants/routes';
import { Redirect } from 'react-router-dom';
import '../../App.css';

interface IErrorProps {
    location: History;
}
const Error = (props: IErrorProps): ReactElement => {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const state = props.location?.state;

    useEffect(() => {
        setShouldRedirect(state === undefined);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {shouldRedirect ? <Redirect to={route_path.home.index} /> : <h1>{state?.error?.message}</h1>}
            </header>
        </div>
    );
};
export default Error;
