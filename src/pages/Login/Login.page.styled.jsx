import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 5%;
`;

const ErrorLabel = styled.p`
  font-size: 15px;
  color: red;
`;

export { Container, ErrorLabel };
