import { useArgs } from '@storybook/addons';
import React from 'react';
import {
  Modal,
  Button,
  Card,
  Input,
  Field
} from '../index';

export default {
  title: 'Modals/Modal',
  component: Modal,
  args: {
    visible: true,
    centered: false,
    onClose: () => {},
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 400,
    },
  },
};

const Template = (args) => {
  const [{ visible, centered}, updateArgs] = useArgs();
  const toggleModal = () => {
    updateArgs({ visible: !visible });
  };
  return (
    <>
      <Modal visible={visible} centered={centered}>
        <Card heading={<div>Heading</div>} sty>
            <Field label='Enter your name'>
                <Input />
            </Field>

            <Button label='Save'/>
        </Card>
      </Modal>
      <Button label="Open Modal" onClick={toggleModal} />
    </>
  );
};

export const Default = Template.bind({});

export const Centered = Template.bind({});
Centered.args = { centered: true };

