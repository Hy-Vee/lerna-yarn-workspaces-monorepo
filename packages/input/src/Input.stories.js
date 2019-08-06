import React from 'react';

import Input from '.';

export default {
    component: Input,
    title: 'Design System|Input'
};

export const placeholder = () => <Input placeholder="Hello World!" />;

export const disabled = () => <Input disabled placeholder="Hello World!" />;
