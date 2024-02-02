import { BaseButtonTheme } from './index'
import type { Meta, StoryFn } from '@storybook/vue3'

import BaseButton from './BaseButton.vue'

const meta = {
  title: 'shared/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
} satisfies Meta<typeof BaseButton>

export default meta

export const PrimaryButton: StoryFn<typeof BaseButton> = (args) => ({
  components: { BaseButton },
  setup() {
    return { args, theme: BaseButtonTheme.PRIMARY }
  },
  template: '<BaseButton v-bind="args" :theme>Button</BaseButton>',
})

export const ClearButton: StoryFn<typeof BaseButton> = (args) => ({
  components: { BaseButton },
  setup() {
    return { args, theme: BaseButtonTheme.CLEAR }
  },
  template: '<BaseButton v-bind="args" :theme>Clear</BaseButton>',
})
