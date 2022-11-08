import React from 'react';
import { Card } from '../index';

export default {
  title: 'Layout/Card',
  component: Card,

  args: {
    raised: false,
    children: 'Content goes here',
    padding: true,
    bordered: true,
  },
};

const Template = (args) => (
  <Card
    {...args}
  />
);

export const Default = Template.bind({});

export const WithHeading = Template.bind({});
WithHeading.args = {
  heading: <div>Heading</div>,
};

export const NoPadding = Template.bind({});
NoPadding.args = { padding: false };

export const NoBorder = Template.bind({});
NoBorder.args = { bordered: false };

export const Raised = Template.bind({});
Raised.args = { raised: true };

export const RaisedWithHeading = Template.bind({});
RaisedWithHeading.args = { raised: true, heading: <div>Heading</div> };

export const WithInfo = Template.bind({});
WithInfo.args = { heading: <div>Heading</div>, info:'Info text goes here' };
