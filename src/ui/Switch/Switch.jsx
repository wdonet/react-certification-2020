import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + #slider:before {
    background-color: ${({theme}) => theme.color.primary};
  }

  :checked + #slider:before {
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  }
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18px;
`;

const StyledSpan = styled.span`
  border-radius: 10px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;
    background-color: ${({theme}) => theme.color.secondary};

  :before {
    border-radius: 10px;
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    left: 4px;
    bottom: 4px;
    background-color: ${({theme}) => theme.color.primary};
    -webkit-transition: .4s;
    transition: .4s;
  }

`;

const Switch = (props) => {
  const { theme } = useContext(AppContext);
  return <StyledLabel id="switch">
    <StyledInput {...props} role="switch" type="checkbox" theme={theme} />
    <StyledSpan id="slider" theme={theme}/>
  </StyledLabel>;
};

export default Switch;
