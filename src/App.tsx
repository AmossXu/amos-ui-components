import React from 'react';
import logo from './logo.svg';

import Button, { ButtonType, ButtonSize } from './conponents/Button/button';
import Menu from './conponents/Menu/menu';
import MenuItem from './conponents/Menu/menuItem';
// import './App.css';

function App() {
  const a = '123'
  if ( a == '123') {

  }
  return (
    <div className="App">
      <Menu
        defaultIndex={0}
      >
        <MenuItem>
        32132321
        </MenuItem>
        <MenuItem>
        dafafdsaf
        </MenuItem>
        <MenuItem>
        vcxzvczxvxz
        </MenuItem>
      </Menu>
      <h1>HELLO</h1>
      <Button
        disabled
        size={ButtonSize.Large}
      >
        Hello
      </Button>
      <Button
        disabled
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
      <Button
        onClick={() => {
          alert('haha')
        }}
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
      >
        Hello
      </Button>
      <button
        style={{border:'none', outline:'none'}}
      >

        hello
      </button>
    </div>
  );
}

export default App;
