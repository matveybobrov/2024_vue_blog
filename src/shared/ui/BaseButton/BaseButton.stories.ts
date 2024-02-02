import { BaseButtonTheme } from './index'
import type { Meta, StoryFn } from '@storybook/vue3'

import BaseButton from './BaseButton.vue'

const meta = {
  title: 'shared/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Button',
    },
    theme: {
      control: { type: 'select' },
      options: [BaseButtonTheme.PRIMARY, BaseButtonTheme.CLEAR],
      defaultValue: BaseButtonTheme.PRIMARY,
    },
  },
} satisfies Meta<typeof BaseButton>

export default meta

export const PrimaryButton = {
  args: {
    default: 'Primary',
    theme: BaseButtonTheme.PRIMARY,
  },
}

export const ClearButton = {
  args: {
    default: 'Clear',
    theme: BaseButtonTheme.CLEAR,
  },
}
