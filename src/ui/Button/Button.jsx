import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../providers/AppContext";

const StyledButton = styled.button`
    border-radius: 8px;
    background: ${({theme}) => theme.color.secondary };
    color: ${({theme}) => theme.color.fontPrimary };
    border: ${({border}) => border ? border : '' };
    height: ${({height}) => height ? height : '' };
    width: ${({width}) => width ? width : '' };
    margin: ${({margin}) => margin ? margin : '' };
`;

const Button = (props) => {
    const { theme } = useContext(AppContext);
    const condensedProps = { ...props, theme };
    return (<StyledButton {...condensedProps}>
        { props.children }
    </StyledButton>);
} 

export default Button;