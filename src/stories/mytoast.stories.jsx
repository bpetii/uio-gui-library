import React from 'react';
import {MyToast} from '../index';

export default {
  title: 'Basic/Toast',
  component: MyToast,
};

const Template = (args) => (
  <MyToast
    {...args}
  />
);

export const Default = Template.bind({});
