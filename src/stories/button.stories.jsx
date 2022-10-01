import React from 'react';
import { FaTrash } from 'react-icons/fa';
import {Button} from '../index';

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    colored: {
      control: {
        type: 'inline-radio',
      },
      options: {
        off: false,
        primary: 'primary',
        success: 'success',
        danger: 'danger',
        muted: 'muted',
      },
    },
    icon: {
      control: { type: 'inline-radio' },
      options: {
        off: undefined,
        on: <FaTrash />,
      },
    },
  },
  args: {
    label: 'Label',
    colored: false,
    disabled: false,
    basic: false,
  },
};

const Template = (args) => (
  <Button
    {...args}
  />
);

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = { small: true };

export const Basic = Template.bind({});
Basic.args = { basic: true };

export const Active = Template.bind({});
Basic.args = { active: true };

export const Round = Template.bind({});
Round.args = { round: true, label: <FaTrash /> };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const FullWidth = Template.bind({});
FullWidth.args = { width: '100%' };
