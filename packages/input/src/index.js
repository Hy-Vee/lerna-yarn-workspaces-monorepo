import styled, {css} from 'styled-components';
import {spacing} from 'theme';
import PropTypes from 'prop-types';

const Input = styled.input`
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
    padding: ${spacing.medium};
    margin-bottom: ${spacing.small};
    width: 100%;

    ${(props) =>
        props.disabled &&
        css`
            color: #999999;
            background-color: #fafafa;
            cursor: not-allowed;
        `}
`;

Input.propTypes = {
    disabled: PropTypes.bool,
    placeholder: PropTypes.string
};

Input.defaultProps = {
    disabled: false
};

export default Input;
