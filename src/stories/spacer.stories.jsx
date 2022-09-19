import React from 'react';
import { Button} from '../components/button/button'
import {Flex} from '../components/flex/flex'
import {Spacer} from '../components/spacer/spacer'

export default {
  title: 'Layout/Spacer',
  component: Spacer,
  argTypes: { width: { control: 'text' }, height: { control: 'text' } },
};

const Template = (args) => (
  <Spacer
    {...args}
  />
);

export const Default = Template.bind({});
Default.decorators = [
  (story) => (
    <>
      <Button label="Button" />
      {story()}
      <Button label="Button" />
    </>
  ),
];

export const Width = Template.bind({});
Width.args = { width: '16px' };
Width.decorators = [
  (story) => (
    <Flex>
      <Button label="Button" />
      {story()}
      <Button label="Button" />
    </Flex>
  ),
];

export const Height = Template.bind({});
Height.args = { height: '10px' };
Height.decorators = [
  (story) => (
    <>
      <Button label="Button" />
      {story()}
      <Button label="Button" />
    </>
  ),
];


