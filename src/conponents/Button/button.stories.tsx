import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonProps } from './button';
import Button from './button';

export default {
  title: '示例/Button',
  component: Button,
  // argTypes: {

  // },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>确定</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = {
  size: 'lg'
};

export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  btnType: 'danger',
};

export const Disabled = Template.bind({});
Disabled.args = {
  btnType: 'danger',
  disabled: true
};

export const Link = Template.bind({});
Link.args = {
  btnType: 'link',
};

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {
  btnType: 'link',
  disabled: true
};