import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  ${({ theme }) => (theme.secondary ? `background-color: ${theme.secondary}` : '')};
  ${({ theme }) => (theme.color ? `color: ${theme.color}` : '')};
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  overflow-y: scroll;
`;

export { MainContainer, Content };
