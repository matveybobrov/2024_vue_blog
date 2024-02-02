import type { Preview } from "@storybook/vue3";
import { Theme } from '@/app/providers/theme/theme';

import StyleDecorator from "./StyleDecorator";
import ThemeDecorator from "./ThemeDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT)
  ],
};

export default preview;
