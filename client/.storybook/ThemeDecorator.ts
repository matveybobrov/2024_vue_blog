import { Theme } from '@/app/providers/theme/theme'

const ThemeDecorator = (theme: Theme) => () => ({
  template: `
      <div class="app ${theme}"><story/></div>
    `,
})

export default ThemeDecorator
