import React from 'react';
import { Field } from '../components/field/field';
import { Input } from '../components/input/input';

export default {
  title: 'Forms/Field',
  component: Field,
  args: {
    label: 'Label',
    labelLeft: false,
  },
};

const Template = (args) => (
  <Field
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...args}
  >
    <Input />
  </Field>
);
export const Default = Template.bind({});

export const LabelOnLeft = Template.bind({});
LabelOnLeft.args = {
  labelLeft: true,
  labelWidth: '80px',
};

