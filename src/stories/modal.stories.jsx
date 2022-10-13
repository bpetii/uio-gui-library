import { useArgs } from '@storybook/addons';
import React from 'react';
import {
  Modal,
  Button,
  Dialog,
} from '../index';

export default {
  title: 'Modals/Modal',
  component: Modal,
  args: {
    visible: true,
    centered: true,
    width: '250px',
    heading: 'Are you sure?',
    content: <>This will complete the transaction</>,
    footer: (
      <>
        <Button label="Okay" colored onClick={() => {}} />
        <Button label="Cancel" onClick={() => {}} />
      </>
    ),
    onClose: () => {},
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 400,
    },
  },
};

const Template = () => {
  const [{ visible, centered, ...dialogProps }, updateArgs] = useArgs();
  const toggleModal = () => {
    updateArgs({ visible: !visible });
  };
  return (
    <>
      <Modal visible={visible} centered={centered}>
        <Dialog
          dialog={{
            ...dialogProps,
            onClose: toggleModal,
          }}
        />
      </Modal>
      <Button label="Open Modal" onClick={toggleModal} />
    </>
  );
};

export const Default = Template.bind({});

export const Centered = Template.bind({});
Centered.args = { centered: true };

export const Scroll = Template.bind({});
Scroll.args = {
  scroll: true,
  content: (
    <div>{'Content goes here...'.repeat(100)}</div>
  ),
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  width: '100%',
  content: (
    <div>{'Content goes here...'.repeat(100)}</div>
  ),
};

