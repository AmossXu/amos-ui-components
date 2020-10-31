import React, { useState } from 'react';
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonType, ButtonSize } from './conponents/Button/button';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import Menu from './conponents/Menu/menu';
import MenuItem from './conponents/Menu/menuItem';
import SubMenu from './conponents/Menu/subMenu';
import Icon from './conponents/Icon/icon';
import Transition from './conponents/Transition/transition';
// import './App.css';
library.add(fas, faCheckSquare)

function App() {
  const [show, setShow] = useState(false)
  const a = '123'
  if (a == '123') {

  }
  return (
    <div className="App">
      {/* <Icon icon="faCoffee" theme='primary' size='10x' /> */}
      <Button size='lg' onClick={() => { setShow(!show) }}>Toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation='zoom-in-left'
      >
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
      </Transition>
      <h1>HELLO</h1>
      <Button
        disabled
        size='lg'
      >
        Hello
      </Button>
      <Button
        disabled
        btnType='danger'
        href='www.baidu.com'
        size='lg'
      >
        Hello
      </Button>
      <Button
        btnType='danger'
        href='www.baidu.com'
        size='lg'
      >
        Hello
      </Button>
      <Button
        size='lg'
      >
        Hello
      </Button>
      <Button
        onClick={() => {
          alert('haha')
        }}
        btnType='primary'
        size='lg'
      >
        Hello
      </Button>
      <button
        style={{ border: 'none', outline: 'none' }}
      >

        hello
      </button>
    </div >
  );
}

export default App;
