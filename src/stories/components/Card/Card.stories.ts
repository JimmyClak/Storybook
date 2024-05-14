import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} as Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
    args: {
        label: 'El fornait... es un JUEGO.',
        size: 'medium',
    },
};
