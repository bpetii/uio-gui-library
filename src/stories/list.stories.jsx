import React from 'react';
import { List} from '../index';
import * as storyData from '../components/list/list.stories-data';

export default {
  title: 'Basic/List',
  component: List,
  args: {
    list: storyData.list,
    noHeader: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

console.log(storyData.list);

const Template = (args) => {
  return (
    <List
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const Bordered = Template.bind({});
Bordered.args = { bordered: true };

