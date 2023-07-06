import type { Meta, StoryObj } from '@storybook/react';

import Link from './link.component';

const meta: Meta = {
  title: 'ui/link',
  component: Link,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: (props) => <Link {...props}>Hello</Link>,
};
