import React from 'react';
import { Menu, Button } from '../index';
import { FaUser } from 'react-icons/fa';

const sections= [
    {
      label: 'King',
      onClick: function noRefCheck(){},
      type: 'Option'
    },
    {
      label: 'Queen',
      onClick: function noRefCheck(){},
      selected: true,
      type: 'Option'
    },
    {
      disabled: true,
      label: 'Knight',
      onClick: function noRefCheck(){},
      type: 'Option'
    },
    {
      label: 'Bishop',
      onClick: function noRefCheck(){},
      type: 'Option'
    }
  ];

export default {
  title: 'Basic/Menu',
  component: Menu,
  args: {
    menu: {
        sections
    }
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 400,
    },
  },
};

const Template = (args) => {
  return (
    <Menu {...args}/>
  );
};

export const Default = Template.bind({});

export const CustomTrigger = Template.bind({});
CustomTrigger.args = {
    menu: {
      sections,
      component: (<Button label={<FaUser />} round />)
    },
  };
  


