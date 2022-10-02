import React from 'react';
import { TextLink } from '../index';

export default {
  title: 'Basic/TextLink',
  component: TextLink,
  args: {
    children: 'Link text goes here',
    href: 'https://www.uio.no',
  },
};

const Template = (args) => (
  <TextLink
    {...args}
  />
);

export const Default = Template.bind({});
