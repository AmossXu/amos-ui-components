import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonProps } from './button';
import Button from './button';

export default {
  title: '示例/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button btnType='primary'>点我</Button>;

export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
  size: 'lg'
};