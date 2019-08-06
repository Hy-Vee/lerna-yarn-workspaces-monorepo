import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from '.';

describe('Input', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Input />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('placeholder', () => {
        const tree = renderer.create(<Input placeholder="test" />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('disabled', () => {
        const tree = renderer.create(<Input disabled />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
