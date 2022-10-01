import React from 'react';
import { Spinner } from '../index';

export default {
  title: 'Progress/Spinner',
  component: Spinner,
  args: {
    colored: false,
    small: false,
    tiny: false,
  },
};

const Template = (args) => (
  <div style={{ background: '#ddd', padding: 20 }}>
    <Spinner
      {...args}
    />
  </div>
);

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.args= {colored: true};

export const Small = Template.bind({});
Small.args={small: true};

export const Tiny = Template.bind({});
Tiny.args={tiny: true};
