import React, {useState} from 'react';
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

export const Default = Template.bind({
  list: storyData.list,
});

export const Bordered = Template.bind({
  list: storyData.list,
});
Bordered.args = { bordered: true,   list: storyData.list, };

export const WithMetaData = Template.bind({});
WithMetaData.args = { list: storyData.listWithMeta};

export const Managed = () => {
  const [id, setId] = useState(null);
  const list = {
    items: [{
      id: 1,
      name: 'Item1',
      onClick: () => setId(1),
      active: 1 ===id
    },
    {
      id: 2,
      name: 'Item2',
      onClick: () => setId(2),
      active: 2 ===id
    },
    {
      id: 3,
      name: 'Item3',
      onClick: () => setId(3),
      active: 3 ===id
    }
  ]
  }

  return (
    <List list={list}
    />
  );
}

