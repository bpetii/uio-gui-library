import React from 'react';
import { useArgs } from '@storybook/addons';
import { Input } from '../components/input/input';

export default {
  title: 'Forms/Input',
  component: Input,
  args: {
    disabled: false,
    small: false,
    placeholder: 'Placeholder',
  },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const handleChange = (evt) => {
    updateArgs({ value: evt.target.value });
  };
  return (
    <Input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
      onChange={handleChange}
    />
  );
};
export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = { small: true} ;

export const Disabled = Template.bind({});
Disabled.args =  { disabled : true };

export const Right = Template.bind({});
Right.args = { right : true };

export const Error = Template.bind({});
Error.args = {error : 'Empty field'};

export const Warning = Template.bind({});
Warning.args = {warning : 'Invalid value'};



