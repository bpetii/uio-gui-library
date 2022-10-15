import React from 'react';
import { CustomSelect} from '../index';
import { useArgs } from '@storybook/addons';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'banana', label: 'Banana' },
    { value: 'cookie', label: 'Cookie' },
    { value: 'cake', label: 'Cake' }
  ]

export default {
  title: 'Forms/Select',
  component: CustomSelect,
  args: {
    options: options
  },
};

const SelectTemplate = (args) => {
    const [{value}, updateArgs] = useArgs();

    const handleChange = (v) => {
        updateArgs({value: v});
      };

  return (
    <CustomSelect
      {...args}
      value={value}
      onChange={o => handleChange(o)}
    >
    </CustomSelect>
  );
};

export const Default = SelectTemplate.bind({});

export const Selected = SelectTemplate.bind({});
Selected.args = {value: options[0]}

export const Multiple = SelectTemplate.bind({});
Multiple.args = {value: [options[0], options[1]], multiple: true}


export const Empty = SelectTemplate.bind({});
Empty.args = {options: [], value: null}




