import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from '.';

describe('Input', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Input id="email" label="Email Address" />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('placeholder', () => {
        const tree = renderer.create(<Input id="email" label="Email Address" placeholder="user@gmail.com" />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('disabled', () => {
        const tree = renderer.create(<Input disabled id="email" label="Email Address" />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
