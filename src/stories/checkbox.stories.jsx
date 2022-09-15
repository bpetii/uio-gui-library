import React from "react";
import { useArgs } from "@storybook/addons";
import { CheckBox } from "../components/checkbox/checkbox";

export default {
  title: "Forms/CheckBox",
  component: CheckBox,
  args: {
    disabled: false,
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
Disabled.args = { disabled: true };

export const DisabledChecked = Template.bind({});
DisabledChecked.args = { disabled: true, checked: true };

export const WithoutLabel = Template.bind({});
WithoutLabel.args = { label: "" };
