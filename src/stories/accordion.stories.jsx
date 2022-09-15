import React, { useState } from 'react';
import { useArgs } from '@storybook/addons';
import { Accordion, } from '../components/accordion/accordion';

export default {
  title: 'Layout/Accordion',
  component: Accordion,
  args: {
    bordered: false,
    expanded: false,
    managed: false,
    children: 'Example content',
  },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const toggleExpanded = () => {
    updateArgs({ expanded: !args.expanded });
  };
  return (
    <Accordion
      heading={<div onClick={toggleExpanded}>Heading</div>}
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};

export const NoContentPadding = Template.bind({});
NoContentPadding.args = {
  bordered: true,
  expanded: true,
  padding: false,
};
