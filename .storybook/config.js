import { configure } from '@storybook/react';

configure(require.context('../src/stories/', false, /\.js$/), module);
