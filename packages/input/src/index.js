import styled from 'styled-components';
import {spacing} from '@hy-vee/theme';

const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 300;
    padding: ${spacing.medium};
    width: 150px;
`;

export default Input;
