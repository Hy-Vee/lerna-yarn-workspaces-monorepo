import React from 'react';

import Button from '.';

export default {
    component: Button,
    title: 'JS Design System/Button'
};

export const primary = () => <Button>{'Button'}</Button>;

export const secondary = () => <Button variant="secondary">{'Button'}</Button>;
