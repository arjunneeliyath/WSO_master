import React, { ReactElement } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';

const App = (): ReactElement => (
    <div className="App">
        <header className="App-header">
            <Router>
                <Routes />
            </Router>
        </header>
    </div>
);
export default App;
