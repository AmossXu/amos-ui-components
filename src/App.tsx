import React from 'react';
import logo from './logo.svg';

import Button, { ButtonType, ButtonSize } from './conponents/Button/button';
import './App.css';

function App() {
  const a = '123'
  if ( a == '123') {

  }
  return (
    <div className="App">
      <h1>HELLO</h1>
      <Button
        disabled
        size={ButtonSize.Large}
      >
        Hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        href='www.baidu.com'
        size={ButtonSize.Large}
      >
        Hello
      </Button>
      <Button
        btnType={ButtonType.Danger}
        href='www.baidu.com'
        size={ButtonSize.Small}
      >
        Hello
      </Button>
      <Button
        size={ButtonSize.Large}
      >
        Hello
      </Button>
      
    </div>
  );
}

export default App;
