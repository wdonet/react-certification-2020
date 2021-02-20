import React from 'react';
import {
  Container,
  Inner,
  InputIcon,
  WrapperInput,
  TrayInput,
  InputStyle,
} from './Input.styled';

const Input = ({ icon, type = 'text', ...rest }) => {
  return (
    <Container>
      <Inner>
        {icon && <InputIcon>{icon}</InputIcon>}
        <WrapperInput>
          <TrayInput>
            <InputStyle {...rest} type={type} />
          </TrayInput>
        </WrapperInput>
      </Inner>
    </Container>
  );
};

export default Input;
