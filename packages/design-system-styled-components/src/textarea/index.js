import styled, {css} from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledTextareaContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;

    input {
        box-shadow: unset;
    }
`;

const StyledTextarea = styled.textarea`
    background-clip: padding-box;
    border-radius: 4px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    color: #3f3f3f;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    font-size: 14px;
    font-weight: 300;
    height: 40px;
    padding: 10px 40px 10px 10px;
    width: 100%;

    :focus {
        box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.42);
        outline: 0;
        transition: box-shadow 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    ::placeholder {
        opacity: 0.5;
    }

    ::-ms-clear {
        display: none;
    }

    ${(props) =>
        props.error &&
        css`
            border-bottom: 2px solid #ba140f;
        `};

    ${(props) =>
        props.disabled &&
        css`
            background: #e8e8e8;

            :hover {
                cursor: not-allowed;
            }

            :focus {
                box-shadow: unset;
            }
        `};
`;

const Textarea = (props) => (
    <StyledTextareaContainer>
        <StyledTextarea {...props} />
    </StyledTextareaContainer>
);

Textarea.propTypes = {
    placeholder: PropTypes.string
};

Textarea.defaultProps = {
    placeholder: 'Enter a message'
};

export default Textarea;
