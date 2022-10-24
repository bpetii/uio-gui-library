import '../src/styles/global.css';
import { useDarkMode } from 'storybook-dark-mode';

export const decorators = [
  (Story) => {
    document.documentElement.setAttribute(
      'data-theme',
      useDarkMode() ? 'dark' : 'default',
    );
    return (
      <>
        <Story />
      </>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}