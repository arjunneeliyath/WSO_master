import React, { ReactElement, useState } from 'react';
import '../App.css';
import Button from '../components/button/button';


const Demo = (): ReactElement => {
  const [inputVal, setInputVal] = useState('');
  var aaa=6;
  const onButtonClick = () => {
    setInputVal('');
  };
  return (
    <div className="App" data-testid="AppId">
      <header className="App-header">
        <h1>Welcome WSO Demo Page</h1>
        <input placeholder='Type Something' value={inputVal} data-testid='input-id'
          onChange={e => setInputVal(e.target.value)} />
        <Button data-testid="button-id" key='buttonKey' value='Reset' onClick={onButtonClick} ></Button>
      </header>
    </div >
  );
};
export default Demo;