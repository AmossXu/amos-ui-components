import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';
import { wrap } from 'module';

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu
        {...props}
      >
        <MenuItem
          index={1}
        >
          32132321
        </MenuItem>
        <MenuItem
          index={2}
          disabled
        >
          dafafdsaf
        </MenuItem>
        <MenuItem
          index={3}
        >
          vcxzvczxvxz
        </MenuItem>
      </Menu>
  )
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component', () => {
  // 通用函数 每个实例之前都会运行
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    // activeElement = wrapper.getByText('active')
    // disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
  })
  it('click items should change active and call the right callback', () => {

  })
  it('should render vertical mode when mode is set to vertical', () => {

  })
})