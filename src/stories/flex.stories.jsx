import React from 'react';
import {Button, Flex} from '../index';

export default {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: {
    alignItems: {
      control: {
        type: 'inline-radio',
      },
      options: ['flex-start', 'center', 'flex-end'],
    },
    justifyContent: {
      control: {
        type: 'inline-radio',
      },
      options: ['flex-start', 'center', 'flex-end', 'space-between'],
    },
    gap: { control: { type: 'boolean' } },
  },
  args: {
    alignItems: undefined,
    justifyContent: undefined,
    children: [<Button label="Login" />, <Button label="Register" />],
  },
};

const Template = (args) => (
  <Flex
    {...args}
  />
);

export const Default = Template.bind({});

export const DefaultGap = Template.bind({});
DefaultGap.args = { gap: true };

export const CustomGap = Template.bind({});
CustomGap.args = { gap: '50px' };

export const Center = Template.bind({});
Center.args = {
  height: '200px',
  alignItems: 'center',
  justifyContent: 'center',
};

export const SpaceBetween = Template.bind({});
SpaceBetween.args = {
  justifyContent: 'space-between',
};
