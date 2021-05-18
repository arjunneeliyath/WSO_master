import React, { ReactElement, useState } from 'react';
import '../../App.css';
import Button from '../../components/button/button';
import ErrorBoundary from '../../components/errorboundary/ErrorBoundary';

const Demo = (): ReactElement => {
    const [inputVal, setInputVal] = useState('');
    const [myArray, setMyArray] = useState(['']);
    const onButtonClick = () => {
        setMyArray([...myArray, inputVal]);
        setInputVal('');
    };
    return (
        <ErrorBoundary>
            <div className="App" data-testid="AppId">
                <header className="App-header">
                    <h1>Welcome WSO Demo Page</h1>
                    <input
                        placeholder="Type Something"
                        value={inputVal}
                        data-testid="input-id"
                        onChange={(e) => setInputVal(e.target.value)}
                    />
                    <Button data-testid="button-id" key="buttonKey" value="Reset" onClick={onButtonClick}></Button>
                    {myArray.map((x) => {
                        return x;
                    })}
                </header>
            </div>
        </ErrorBoundary>
    );
};
export default Demo;
