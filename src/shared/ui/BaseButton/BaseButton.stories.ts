import type { Meta } from '@storybook/vue3'

import { Theme } from '@/app/providers/theme/theme'

import { StyleDecorator, ThemeDecorator } from '@/shared/config/storybook'

import BaseButton from './BaseButton.vue'
import { BaseButtonTheme } from './index'

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
  decorators: [StyleDecorator, ThemeDecorator(Theme.DARK)],
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
