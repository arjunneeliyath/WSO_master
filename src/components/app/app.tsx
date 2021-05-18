import React, { ReactElement } from 'react';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '../error-boundary/error-boundary';
import Routes from '../route/route';

const App = (): ReactElement => (
    <div className="App">
        <header className="App-header">
            <Router>
                <ErrorBoundary>
                    <Routes />
                </ErrorBoundary>
            </Router>
        </header>
    </div>
);
export default App;
