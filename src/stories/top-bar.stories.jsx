import React from 'react';
import { FaUser } from 'react-icons/fa';
import { TopBar, Button } from '../index';

const content = [
    {
        type: 'Text',
        label: 'Master thesis',
      },
];

const contentRight = [
    {
        type: 'Button',
        label: 'Dark mode',
        colored: true,
        onClick: () => {},
      },
      {
        type: 'Button',
        label: 'Language',
        colored: true,
        onClick: () => {},
      },
  {
    type: 'Component',
    component: (
        <Button label={<FaUser />} round onClick={() => {}} />
    ),
  },
];

export default {
  title: 'Navigation/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 200,
    },
  },
  args: {
    content,
    contentRight,
  },
};

const Template = (args) => (
  <TopBar // eslint-disable-next-line react/jsx-props-no-spreading
    {...args}
  />
);

export const Default = Template.bind({});

