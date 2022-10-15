import React, { useState } from 'react';
import {
  FaChevronLeft,
} from 'react-icons/fa';
import { Drawer, Button, List, Flex } from '../index';
import * as storyData from '../components/list/list.stories-data';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Layout/Drawer',
  component: Drawer,
  args: {
    button: true,
    open: true,
    right: false,
    border: true,
    shadow: false,
    width: '300px',
    closedWidth: '50px',
    top: undefined,
    children: <div style={{ padding: 20 }}>Drawer content</div>,
  },
  argTypes: {
    button: { table: { disable: true } },
  },
  decorators: [
    (story) => (
      <Flex height="500px">
        <div
          style={{
            flexGrow: 1,
            padding: 20,
          }}
        >
          Page content
        </div>
        {story()}
      </Flex>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  return (
    <Drawer
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
    />
  );
};
export const Default = Template.bind({});

export const Right = Template.bind({});
Right.args = { right: true };

export const Fixed = Template.bind({});
Fixed.args = {
  fixed: true,
};

Fixed.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: '400px',
  },
};

export const HasFooter = Template.bind({});
HasFooter.args = {
  fixed: true,
  hasFooter: true
};

HasFooter.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: '400px',
  },
};

export const WithList = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      button={
        <Button onClick={() => setOpen(!open)} round icon={<FaChevronLeft />} />
      }
      width="300px"
      closedWidth="50px"
      border
      open={open}
    >
      <List
        drawer
        list={storyData.list}
        marginBottom={10}
        narrow={!open}
      />
    </Drawer>
  );
};
WithList.parameters = {
  docs: {
    description: {
      story:
        'To hide `List` headings when the `Drawer` is closed, set the `narrow` prop on the `List`.',
    },
  },
};