import '@/app/styles/index.scss'

// It provides styles to storybook components
export default function StyleDecorator() {
  return {
    template: '<story />',
  }
}
