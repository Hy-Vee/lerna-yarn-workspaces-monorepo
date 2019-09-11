import React from 'react';

import Input from '.';

export default {
    component: Input,
    title: 'Design System|Input'
};

export const placeholder = () => <Input id="email" label="Email" placeholder="me@leerob.io" />;

export const disabled = () => <Input disabled id="email" label="Email" placeholder="me@leerob.io" />;
