import type { Decorator } from '@storybook/vue3'

const ThemeDecorator: Decorator = () => ({
  template: `
      <div class="app dark"><story/></div>
    `,
})

export default ThemeDecorator
