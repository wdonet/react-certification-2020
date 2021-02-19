import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  text-transform: capitalize;
  font-weight: normal;
  text-align: center;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const InputLabel = styled.strong`
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;
`;

export const LoginInput = styled.input`
  color: black;
  font-size: 1.2rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  border: 1px solid black;
  background-color: white;

  &:focus {
    outline: none !important;
  }
`;

export const SubmitButton = styled.button`
  width: 7rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid green;
  background-color: white;
  transition: 0.4s;
  color: green;
  cursor: pointer;

  &:hover {
    font-size: 1.3rem;
  }
`;
