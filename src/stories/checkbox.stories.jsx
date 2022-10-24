import React from "react";
import { useArgs } from "@storybook/addons";
import { CheckBox } from "../index";

export default {
  title: "Forms/CheckBox",
  component: CheckBox,
  args: {
    label: "Label",
  },
};

const Template = (args) => {
  const [{ checked }, updateArgs] = useArgs();
  const handleChange = () => {
    updateArgs({ checked: !checked });
  };
  return <CheckBox {...args} onChange={handleChange} />;
};
export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = { disabled: true, checked: true };

export const WithoutLabel = Template.bind({});
WithoutLabel.args = { label: "" };

