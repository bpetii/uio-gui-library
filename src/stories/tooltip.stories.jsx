import React from 'react';
import { Tooltip, Text } from '../index';

export default {
  title: 'Basic/Tooltip',
  component: Tooltip,
  args: {
    text: 'Tooltip text',
    error: false,
    warning: false,
    enabled: true,
    placement: undefined,
    triggerOffset: undefined,
    children: <Text>Hover over me</Text>,
  },
};

const Template = (args) => (

  <Tooltip
    {...args}
  />
);
export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { error: true };

export const Warning = Template.bind({});
Warning.args = { warning: true };

export const JSX = Template.bind({});
JSX.args = {
  text: (
    <>
      Select from options:
      <ul>
        <li>One</li>
        <li>Two</li>
      </ul>
    </>
  ),
};

export const Placement = Template.bind({});
Placement.args = { placement: 'right' };

export const Offset = Template.bind({});
Offset.args = { triggerOffset: 30 };

export const ForceOpen = Template.bind({});
ForceOpen.args = { forceOpen: true };
