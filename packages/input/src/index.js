import styled, {css} from 'styled-components';
import React from 'react';
import {spacing} from 'theme';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
    width: 100%;
`;

const StyledLabel = styled.label`
    color: #868686;
    font-family: -apple-system, BlinkMacSystemFont;
    font-size: 0.8rem;
    text-transform: uppercase;
`;

const StyledInput = styled.input`
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: none;
    box-sizing: border-box;
    caret-color: #000;
    color: #000;
    display: block;
    font-size: 14px;
    height: 40px;
    line-height: 26px;
    padding: 10px;
    margin: ${spacing.extraSmall} 0 ${spacing.small};
    width: 100%;

    ::placeholder {
        color: #999;
    }

    ${(props) =>
        props.disabled &&
        css`
            color: #999999;
            background-color: #fafafa;
            cursor: not-allowed;
        `}
`;

const Input = ({disabled, id, label, placeholder}) => (
    <StyledContainer>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInput disabled={disabled} id={id} placeholder={placeholder} type="text" />
    </StyledContainer>
);

Input.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

Input.defaultProps = {
    disabled: false
};

export default Input;
