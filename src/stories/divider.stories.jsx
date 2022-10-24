import React from 'react';
import { Label, Divider, Text} from '../index';

export default {
  title: 'Layout/Divider',
  component: Divider,
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
      },
      options: ['left', 'center', 'right'],
    },
  },
  decorators: [(story) => <Text>content{story()}more content</Text>],
  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
      },
    },
  },
};

const Template = (args) => (
  <Divider
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...args}
  />
);

export const Default = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  children: 'Some Text',
  align: 'left',
};

export const Margin = Template.bind({});
Margin.args = {
  margin: 0,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: 'red',
  children: <span style={{color:'red'}}>Colored text</span>,
  align: 'left',
};
