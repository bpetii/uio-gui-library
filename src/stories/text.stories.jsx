import React from 'react';
import { Text } from '../index';

export default {
  title: 'Basic/Text',
  component: Text,
  args: {
    children: 'Text goes here',
    small: false,
    muted: false,
    link: false,
    onClick: undefined,
  },
};

const Template = (args) => (
  <Text
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...args}
  />
);
export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = { small: true };

export const Link = Template.bind({});
Link.args = { link: true, onClick: () => {} };
