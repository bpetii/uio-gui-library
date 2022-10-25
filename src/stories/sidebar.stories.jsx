import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { SideBar, Flex, Badge } from '../index';

const sections = [
  {
    heading: 'First Heading',
    items: [
      {
        label: 'Section A',
        value: '/path/to/something',
        onClick: () => {},
      },
      {
        label: (
          <Flex alignItems="center" gap="10px">
            Section B
            <Badge small title="BETA" />
          </Flex>
        ),
        value: '/path/to/something',
        onClick: () => {},
        isActive: true,
      },
      {
        label: 'Section C',
        value: '/path/to/something',
        onClick: () => {},
      },
      {
        label: 'Experimental Section',
        value: '/path/to/something',
        onClick: () => {},
        isExperimental: true,
      },
    ],
  },
  {
    heading: 'Second Heading',
    items: [
      {
        label: 'Section 1',
        value: '/path/to/something',
        onClick: () => {},
        icon: <FaAngleDoubleRight />,
      },
      {
        label: 'Section 2',
        value: '/path/to/something',
        onClick: () => {},
        icon: <FaAngleDoubleRight />,
      },
      {
        label: 'Invalid Section',
        value: '/path/to/something',
        onClick: () => {},
        invalid: true,
      },
    ],
  },
];

export default {
  title: 'Navigation/SideBar',
  component: SideBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
  args: {
    options: {
      title: 'Title',
      sections,
    },
    startOpen: false,
  },
  argTypes: {
    top: { control: { type: 'text' } },
    startOpen: { control: { type: 'boolean' } },
  },
};

const Template = (args) => (
  <SideBar // eslint-disable-next-line react/jsx-props-no-spreading
    {...args}
  />
);

export const Default = Template.bind({});

export const StartOpen = Template.bind({});
StartOpen.args = { startOpen: true };
