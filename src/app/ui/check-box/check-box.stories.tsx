import type { Meta, StoryObj } from '@storybook/react';

import CheckBox from './check-box.component';

const meta: Meta = {
  title: 'ui/checkbox',
  component: CheckBox,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  render: () => <CheckBox id="test" />,
};
