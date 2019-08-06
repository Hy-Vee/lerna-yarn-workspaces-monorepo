import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '.';

describe('Button', () => {
    test('primary', () => {
        const tree = renderer.create(<Button>{'Test'}</Button>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('secondary', () => {
        const tree = renderer.create(<Button variant="secondary">{'Test'}</Button>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
