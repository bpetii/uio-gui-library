import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Icon } from '../index';
import svgIcon from '../components/icon/example-svg.svg';

export default {
  title: 'Basic/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'text' },
    size: { control: 'text' },
  },
  args: {
    icon: <FaAngleDoubleRight />,
  },
};

const Template = (args) => (
  <Icon
    {...args}
  />
);

export const Default = Template.bind({});

export const Clickable = Template.bind({});
Clickable.args = { onClick: () => {}, clickable: true };

export const Size = Template.bind({});
Size.args = { size: '50px' };

export const Color = Template.bind({});
Color.args = { color: 'red' };

export const CustomSVG = Template.bind({});
CustomSVG.args = { icon: svgIcon, size: '14px' };

