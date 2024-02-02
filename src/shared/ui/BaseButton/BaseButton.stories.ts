import { BaseButtonTheme } from './index'
import type { Meta } from '@storybook/vue3'

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
      options: ['default', BaseButtonTheme.CLEAR, BaseButtonTheme.OUTLINE],
      defaultValue: 'default',
    },
  },
} satisfies Meta<typeof BaseButton>

export default meta

export const Default = {
  args: {
    default: 'Default',
  },
}

export const Clear = {
  args: {
    default: 'Clear',
    theme: BaseButtonTheme.CLEAR,
  },
}

export const Outline = {
  args: {
    default: 'Outline',
    theme: BaseButtonTheme.OUTLINE,
  },
}
