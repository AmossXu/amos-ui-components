import React from "react";

import { Meta, Story } from "@storybook/react/types-6-0";
import Icon, { IconProps } from "./icon";
export default {
  title: "示例/Icon",
  component: Icon,
} as Meta;

const BasicIcon: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = BasicIcon.bind({});
Default.args = {
  icon: "check-circle",
  theme: "primary",
  size: "10x",
};
