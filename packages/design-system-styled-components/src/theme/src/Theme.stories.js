import React from 'react';
import styled, {css} from 'styled-components';

import * as Theme from '.';

const SpacingTable = styled.table`
    tr {
        height: 40px;
        display: flex;
        align-items: center;

        td:first-child {
            width: 150px;
        }

        td {
            text-align: left;
        }
    }
`;

const Strong = styled.span`
    font-weight: 500;
    margin-right: 4px;
`;

const SpacingBlock = styled.div`
    background-color: #ef9a9a;
    height: 30px;

    ${(props) =>
        props.width &&
        css`
            width: ${props.width};
        `};
`;

export default {
    component: Theme,
    title: 'JS Design System/Theme'
};

export const spacing = () => (
    <SpacingTable>
        <tbody>
            {Object.keys(Theme.spacing).map((key) => (
                <tr key={key}>
                    <td>
                        <Strong>{key}</Strong>
                        <span>{`(${Theme.spacing[key]})`}</span>
                    </td>
                    <td>
                        <SpacingBlock width={Theme.spacing[key]} />
                    </td>
                </tr>
            ))}
        </tbody>
    </SpacingTable>
);

export const typography = () => (
    <SpacingTable>
        <tbody>
            <tr>
                <td>
                    <Strong>{'H1'}</Strong>
                </td>
                <td>
                    <Theme.H1>{'H1 Heading'}</Theme.H1>
                </td>
            </tr>
            <tr>
                <td>
                    <Strong>{'H2'}</Strong>
                </td>
                <td>
                    <Theme.H2>{'H2 Heading'}</Theme.H2>
                </td>
            </tr>
            <tr>
                <td>
                    <Strong>{'P'}</Strong>
                </td>
                <td>
                    <Theme.P>{'Paragraph Text'}</Theme.P>
                </td>
            </tr>
        </tbody>
    </SpacingTable>
);
