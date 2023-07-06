import type { Meta, StoryObj } from '@storybook/react';

import Select from './select.component';

const meta: Meta = {
  title: 'ui/select',
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: () => <Select />,
};
