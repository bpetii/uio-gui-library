import { useArgs } from '@storybook/addons';
import React from 'react';
import { Message } from '../index';

const message = {
  visible: true,
  heading: undefined,
  content: 'Here is some info',
  type: 'Info',
  withDismiss: false,
  icon: false,
  details: undefined,
  maxHeight: undefined,
};

export default {
  title: 'Basic/Message',
  component: Message,
  args: {
    ...message,
  },
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
      },
      options: ['Info', 'Error', 'Warning', 'Success'],
    },
    heading: {
      control: { type: 'text' },
    },
    details: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();

  const handleClose = () => {
    updateArgs({ visible: false });
    setTimeout(() => {
      updateArgs({ visible: true });
    }, 1000);
  };

  return (
    <Message
      message={{
        ...args,
        onClose: handleClose,
      }}
    />
  );
};

export const Default = Template.bind({});

export const Heading = Template.bind({});
Heading.args = { heading: 'Message Heading' };

export const Warning = Template.bind({});
Warning.args = { type: 'Warning' };

export const Error = Template.bind({});
Error.args = { type: 'Error' };

export const Details = Template.bind({});
Details.args = {
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi ac quam condimentum blandit at sit amet lectus. Nullam volutpat erat maximus, venenatis nisl sed, aliquam libero.',
};

export const FullWidth = Template.bind({});
FullWidth.args = { width: '100%' };

export const FixedWidth = Template.bind({});
FixedWidth.args = { width: '300px' };

export const MaxHeight = Template.bind({});
MaxHeight.args = {
  maxHeight: '100px',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(
    20,
  ),
};
