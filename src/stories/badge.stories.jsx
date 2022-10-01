import React from 'react';
import {Badge, Button} from '../index';

export default {
  title: 'Basic/Badge',
  component: Badge,
  args: {
    title: '3',
    color: '',
    small: false,
    children: <Button name="example" label="Button" onClick={() => {}} />,
  },
};

const Template = (args) => (
  <Badge
    {...args}
  />
);

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = { small: true };

export const Dot = Template.bind({});
Dot.args = { dot: true, title: undefined };

export const Standalone = Template.bind({});
Standalone.args = { children: undefined };
