import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AbbrProps } from './abbr';
import Abbr from './abbr';

export default {
  title: '示例/Abbr',
  component: Abbr,
} as Meta;

const testText = '微萌医院管理有限公司微萌医院管理有限公司微萌医院管理有限公司微萌医院管理有限公司'
const BasicAbbr: Story<AbbrProps> = (args: AbbrProps) => <Abbr {...args} ></Abbr>;
const LengthAbbr: Story<AbbrProps> = (args: AbbrProps) => <Abbr {...args} ></Abbr>;

export const Default = BasicAbbr.bind({});
Default.args = {
  text: testText
};

export const Length = LengthAbbr.bind({});
Length.args = {
  text: testText,
  length: 10
};