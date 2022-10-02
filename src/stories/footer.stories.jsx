import React from 'react';
import { Footer } from '../index';

export default {
  title: 'Layout/Footer',
  component: Footer,
  args: { },
};

const Template = (args) => (
  <Footer
    {...args}
  />
);
export const Default = Template.bind({});

