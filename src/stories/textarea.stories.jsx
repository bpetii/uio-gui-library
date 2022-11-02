import React from 'react';
import { useArgs } from '@storybook/addons';
import { TextArea } from '../index';

export default {
  title: 'Forms/TextArea',
  component: TextArea,
  args: {
    disabled: false,
  },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const handleChange = (evt) => {
    updateArgs({ value: evt.target.value });
  };
  return (
    <TextArea
      {...args}
      onChange={handleChange}
    />
  );
};
export const Default = Template.bind({});
