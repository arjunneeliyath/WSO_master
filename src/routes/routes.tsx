import React, { ReactElement, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routeProps, { route_path } from '../constants/routes'

export default (): ReactElement => {
    return (
        <Suspense fallback={<div>...Loading</div>}>
            <Switch>
                <>
                    <Route exact path='/'><Redirect to={route_path.home.index} /></Route>
                    {
                        routeProps.map(props => (<Route {...props} key={props.path} />))
                    }
                </>
            </Switch>
        </Suspense>
    )
};
