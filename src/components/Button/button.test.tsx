import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button, { ButtonSize, ButtonProps, ButtonType } from './button';

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'test'
}

const disableProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element.disabled).toBeFalsy
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on defferent props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg test')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com" >Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disableProps}>Disabled</Button>)
    const element = wrapper.getByText('Disabled') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    // expect(element).toHaveClass('btn btn-disabled')
    expect(element.disabled).toBeTruthy
    fireEvent.click(element)
    expect(disableProps.onClick).not.toHaveBeenCalled()
  })
})