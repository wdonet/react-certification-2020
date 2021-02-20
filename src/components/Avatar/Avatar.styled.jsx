import styled from 'styled-components';

const Container = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.base};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`;

export { Container };
