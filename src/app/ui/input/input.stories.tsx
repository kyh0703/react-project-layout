import type { Meta, StoryObj } from '@storybook/react';

import Input from './input.component';

const meta: Meta = {
  title: 'ui/input',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: '30px' }}>
      <Input id="basic" />
    </div>
  ),
};
