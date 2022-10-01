import React from 'react';
import { useArgs } from '@storybook/addons';
import { Toggle } from '../index';

export default {
  title: 'Forms/Toggle',
  component: Toggle,
  args: {
    label: 'Label',
  },
};

const Template = (args) => {
  const [{ checked }, updateArgs] = useArgs();
  const handleChange = () => {
    updateArgs({ checked: !checked });
  };
  return (
    <Toggle
      {...args}
      onChange={handleChange}
    />
  );
};
export const Default = Template.bind({});

export const NoMargin = Template.bind({});
NoMargin.args = {noMargin: true};

export const Checked = Template.bind({});
Checked.args = {checked: true};

export const Disabled = Template.bind({});
Disabled.args = {disabled: true};

export const Small = Template.bind({});
Small.args = {small: true};
