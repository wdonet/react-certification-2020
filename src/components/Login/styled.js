import styled from 'styled-components';

const LoginBackground = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);

  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const LoginBox = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5%;
  width: 300px;
  height: 350px;
  position: relative;
`;

const CloseLoginButton = styled.span`
  color: #aaa;
  position: absolute;
  top: 0px;
  right: 15px;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;

const InputText = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.font.secondary};
  margin: 10px 0;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export { LoginBackground, LoginBox, CloseLoginButton, ErrorText, InputText, FormStyled };
