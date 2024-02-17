import { render } from '@testing-library/vue'

import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  test('some test', () => {
    const { getByText } = render(BaseButton, {
      slots: {
        default: 'Click me!'
      }
    })
    expect(getByText('Click me!')).toBeInTheDocument()
  })
})
