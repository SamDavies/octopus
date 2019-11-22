import '!style-loader!css-loader!../src/static/css/fonts.css';
import '!style-loader!css-loader!../src/static/css/styles.css';
import { configure } from '@storybook/react';

configure(require.context('../src/stories/', false, /\.js$/), module);
