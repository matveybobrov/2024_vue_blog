import { BaseButtonTheme } from './index'
import type { Meta, StoryFn } from '@storybook/vue3'

import BaseButton from './BaseButton.vue'

const meta = {
  title: 'shared/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: [BaseButtonTheme.PRIMARY, BaseButtonTheme.CLEAR],
      defaultValue: BaseButtonTheme.PRIMARY,
    },
  },
} satisfies Meta<typeof BaseButton>

export default meta

export const DefaultButton: StoryFn<typeof BaseButton> = (args) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<BaseButton v-bind="args">Button</BaseButton>',
})

export const ClearButton: StoryFn<typeof BaseButton> = (args) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<BaseButton v-bind="args" theme="clear">Clear</BaseButton>',
})
