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
      type: 'Option'
    },
    {
      label: 'Bishop',
      onClick: function noRefCheck(){},
      type: 'Option'
    }
  ];

  const sectionsWithHeading= [
    {
      label: 'Vegetables',
      onClick: function noRefCheck(){},
      type: 'Heading'
    },
    {
      label: 'Carrot',
      onClick: function noRefCheck(){},
      type: 'Option'
    },
    {
      label: 'Broccoli',
      onClick: function noRefCheck(){},
      selected: true,
      type: 'Option'
    },
    {
      type: 'Divider'
    },
    {
      label: 'Fruits',
      onClick: function noRefCheck(){},
      type: 'Heading'
    },
    {
      label: 'Apple',
      type: 'Option'
    },
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

export const Left = Template.bind({});
Left.decorators=[
  (story) => <div style={{marginLeft: '50px'}}>{story()}</div>
]
Left.args = {
      menu: {
        sections,
        left: true
      },
    };

export const WithHeading = Template.bind({});
WithHeading.args = {
    menu: {sections: sectionsWithHeading },
  };
  


