import React, { ReactElement } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';

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
