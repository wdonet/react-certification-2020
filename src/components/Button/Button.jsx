import styled from 'styled-components';

const Button = styled.button`
    background: transparent;
    border: none;
    font-size: ${(props) => props.size};
    cursor: pointer;
    color: #919191;
`;

export default Button;
