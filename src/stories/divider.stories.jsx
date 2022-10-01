import React from 'react';
import { Label, Divider} from '../index';

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
  decorators: [(story) => <>content{story()}more content</>],
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
  color: '#DDDDDD',
  children: <Label >Colored text</Label>,
  align: 'left',
};
