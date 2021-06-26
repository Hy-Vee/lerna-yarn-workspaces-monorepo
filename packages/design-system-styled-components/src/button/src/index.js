import styled, {css} from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import {spacing} from '../../theme/src';

const APPEARANCES = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
};

const StyledButton = styled.button`
    background-color: #000;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 0.88rem;
    font-weight: 500;
    height: 40px;
    line-height: 38px;
    min-width: 200px;
    outline: none;
    overflow: hidden;
    padding: 0 ${spacing.extraLarge};
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.2s ease 0s;
    user-select: none;
    white-space: nowrap;

    :hover {
        color: #000;
        border: 1px solid #000;
        background-color: #fff;
    }

    ${(props) =>
        props.variant === APPEARANCES.SECONDARY &&
        css`
            color: #666;
            background-color: white;
            border: 1px solid #eaeaea;

            :hover {
                color: #fff;
                border: 1px solid #000;
                background-color: #000;
            }
        `}
`;

const Button = (props) => <StyledButton {...props} />;

Button.propTypes = {
    disabled: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(APPEARANCES))
};

Button.defaultProps = {
    disabled: false,
    variant: APPEARANCES.PRIMARY
};

export default Button;
