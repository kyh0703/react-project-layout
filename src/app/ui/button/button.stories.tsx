import type { Meta, StoryObj } from '@storybook/react';

import Button from './button.component';

const meta: Meta = {
  title: 'ui/button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button variant={'primary'}>Primary</Button>,
};

export const Inverse: Story = {
  render: () => <Button variant={'inverse'}>Inverse</Button>,
};

export const Danger: Story = {
  render: () => <Button variant={'danger'}>Danger</Button>,
};
