
import React from 'react';
import { Label } from '../components/label/label';

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

