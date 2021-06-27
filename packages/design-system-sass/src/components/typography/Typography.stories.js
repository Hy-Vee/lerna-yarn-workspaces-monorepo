import React from 'react';

import * as Typography from '.';

export const typography = () => (
    <table>
        <tbody>
            <tr>
                <td>
                    <strong>{'H1'}</strong>
                </td>
                <td>
                    <Typography.H1>{'H1 Heading'}</Typography.H1>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>{'H2'}</strong>
                </td>
                <td>
                    <Typography.H2>{'H2 Heading'}</Typography.H2>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>{'P'}</strong>
                </td>
                <td>
                    <Typography.P>{'Paragraph Text'}</Typography.P>
                </td>
            </tr>
        </tbody>
    </table>
);

export default {
    component: Typography,
    title: 'Sass Design System/Typography'
};
