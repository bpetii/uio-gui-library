
import React from 'react';
import { Label } from '../index';

export default {
  title: 'Forms/Label',
  component: Label,
  args: {
    label: 'Label',
  },
};

const Template = (args) => (
  <Label
    {...args}
  />
);

export const Default = Template.bind({});

export const LabelLeft = Template.bind({});
LabelLeft.args = {labelLeft: true}

export const WithInfo = Template.bind({});
WithInfo.args = {info: 'Info message goes here'}

