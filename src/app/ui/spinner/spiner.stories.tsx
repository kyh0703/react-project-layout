import type { Meta, StoryObj } from '@storybook/react';

import Spinner from './spinner.component';

const meta: Meta = {
  title: 'ui/spinner',
  component: Spinner,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: () => <Spinner message="test" />,
};
