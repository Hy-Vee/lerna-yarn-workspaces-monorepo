import {configure} from '@storybook/react';

const req = require.context('../packages', true, /.story.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
