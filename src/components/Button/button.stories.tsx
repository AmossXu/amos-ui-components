import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonProps } from './button';
import Button from './button';

export default {
  title: '示例/Button',
  component: Button,
} as Meta;

const BasicButton: Story<ButtonProps> = (args) => <Button {...args}>确定</Button>;
const SizeButton: Story<ButtonProps> = (args) => <div>
  <Button {...args} size='lg'>确定</Button>
  <Button {...args} size='sm'>确定</Button>
</div >;

export const Default = BasicButton.bind({});
Default.args = {};

export const Large = SizeButton.bind({});
Large.args = {};

export const Primary = BasicButton.bind({});
Primary.args = {
  btnType: 'primary',
};

export const Danger = BasicButton.bind({});
Danger.args = {
  btnType: 'danger',
};

export const Disabled = BasicButton.bind({});
Disabled.args = {
  btnType: 'danger',
  disabled: true
};

export const Link = BasicButton.bind({});
Link.args = {
  btnType: 'link',
  href: "www.baidu.com"
};

export const LinkDisabled = BasicButton.bind({});
LinkDisabled.args = {
  btnType: 'link',
  disabled: true,
  href: "www.baidu.com"
};