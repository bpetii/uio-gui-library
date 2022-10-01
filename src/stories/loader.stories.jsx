import React from 'react';
import { Loader, Spinner } from '../index';

export default {
  title: 'Progress/Loader',
  component: Loader,
  argTypes: {
    theme: {
      control: 'color'
    },
  },
  args: {
    text: 'Loading...',
    width: '100%',
    height: '100%',
    fullViewPortSize: false,
  },
  decorators: [
    (story) => (
      <div style={{ height: '200px', position: 'relative' }}>{story()}</div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
      },
    },
  },
};

const SpinnerTemplate = (args) => {
  return (
    <Loader
      {...args}
    >
      <Spinner colored={true} />
    </Loader>
  );
};


export const Default = SpinnerTemplate.bind({});

export const TintedBackground = SpinnerTemplate.bind({});
TintedBackground.args={theme: 'black'}

export const FullViewport = SpinnerTemplate.bind({});
FullViewport.args = {

  fullViewPortSize: true,
};


