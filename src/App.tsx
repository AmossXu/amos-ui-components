import React from 'react';
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonType, ButtonSize } from './conponents/Button/button';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import Menu from './conponents/Menu/menu';
import MenuItem from './conponents/Menu/menuItem';
import SubMenu from './conponents/Menu/subMenu';
import Icon from './conponents/Icon/icon';
// import './App.css';
library.add(fas, faCheckSquare)

function App() {
  const a = '123'
  if (a == '123') {

  }
  return (
    <div className="App">
      {/* <Icon icon="faCoffee" theme='primary' size='10x' /> */}
      <Icon icon="spinner" theme='danger' />
      <Menu
        defaultIndex={'0'}
        // mode='vertical'
        defaultOpenSubMenus={['2']}
      // onSelect={(index) => alert(index)}
      >
        <MenuItem
        >
          32132321
        </MenuItem>
        <MenuItem
          disabled
        >
          dafafdsaf
        </MenuItem>

        <SubMenu
          title='fadfda'
        >
          <MenuItem>
            dafafdsaf
          </MenuItem>
          <MenuItem>
            vcxzvczxvxz
          </MenuItem>
        </SubMenu>
        <MenuItem
        >
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
        style={{ border: 'none', outline: 'none' }}
      >

        hello
      </button>
    </div>
  );
}

export default App;
