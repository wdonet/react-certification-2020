import styled from 'styled-components';

const Input = styled.input`
  ::placeholder {
    color: palevioletred;
  }
  color: gray;
  font-size: 1.2rem;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  outline: none;
  margin-left: 40px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;

export { Input };
