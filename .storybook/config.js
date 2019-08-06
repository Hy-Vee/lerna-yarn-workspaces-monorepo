import {configure} from '@storybook/react';

configure(require.context('../packages/', true, /\.stories\.js$/), module);
